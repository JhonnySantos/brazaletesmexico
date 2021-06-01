
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
var app = (function () {
    'use strict';

    function noop() { }
    function assign(tar, src) {
        // @ts-ignore
        for (const k in src)
            tar[k] = src[k];
        return tar;
    }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }
    function create_slot(definition, ctx, $$scope, fn) {
        if (definition) {
            const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
            return definition[0](slot_ctx);
        }
    }
    function get_slot_context(definition, ctx, $$scope, fn) {
        return definition[1] && fn
            ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
            : $$scope.ctx;
    }
    function get_slot_changes(definition, $$scope, dirty, fn) {
        if (definition[2] && fn) {
            const lets = definition[2](fn(dirty));
            if ($$scope.dirty === undefined) {
                return lets;
            }
            if (typeof lets === 'object') {
                const merged = [];
                const len = Math.max($$scope.dirty.length, lets.length);
                for (let i = 0; i < len; i += 1) {
                    merged[i] = $$scope.dirty[i] | lets[i];
                }
                return merged;
            }
            return $$scope.dirty | lets;
        }
        return $$scope.dirty;
    }
    function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
        const slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);
        if (slot_changes) {
            const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
            slot.p(slot_context, slot_changes);
        }
    }

    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function empty() {
        return text('');
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_style(node, key, value, important) {
        node.style.setProperty(key, value, important ? 'important' : '');
    }
    function custom_event(type, detail) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, false, false, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    let flushing = false;
    const seen_callbacks = new Set();
    function flush() {
        if (flushing)
            return;
        flushing = true;
        do {
            // first, call beforeUpdate functions
            // and update components
            for (let i = 0; i < dirty_components.length; i += 1) {
                const component = dirty_components[i];
                set_current_component(component);
                update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        flushing = false;
        seen_callbacks.clear();
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    let outros;
    function group_outros() {
        outros = {
            r: 0,
            c: [],
            p: outros // parent group
        };
    }
    function check_outros() {
        if (!outros.r) {
            run_all(outros.c);
        }
        outros = outros.p;
    }
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }
    function outro_and_destroy_block(block, lookup) {
        transition_out(block, 1, 1, () => {
            lookup.delete(block.key);
        });
    }
    function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
        let o = old_blocks.length;
        let n = list.length;
        let i = o;
        const old_indexes = {};
        while (i--)
            old_indexes[old_blocks[i].key] = i;
        const new_blocks = [];
        const new_lookup = new Map();
        const deltas = new Map();
        i = n;
        while (i--) {
            const child_ctx = get_context(ctx, list, i);
            const key = get_key(child_ctx);
            let block = lookup.get(key);
            if (!block) {
                block = create_each_block(key, child_ctx);
                block.c();
            }
            else if (dynamic) {
                block.p(child_ctx, dirty);
            }
            new_lookup.set(key, new_blocks[i] = block);
            if (key in old_indexes)
                deltas.set(key, Math.abs(i - old_indexes[key]));
        }
        const will_move = new Set();
        const did_move = new Set();
        function insert(block) {
            transition_in(block, 1);
            block.m(node, next);
            lookup.set(block.key, block);
            next = block.first;
            n--;
        }
        while (o && n) {
            const new_block = new_blocks[n - 1];
            const old_block = old_blocks[o - 1];
            const new_key = new_block.key;
            const old_key = old_block.key;
            if (new_block === old_block) {
                // do nothing
                next = new_block.first;
                o--;
                n--;
            }
            else if (!new_lookup.has(old_key)) {
                // remove old block
                destroy(old_block, lookup);
                o--;
            }
            else if (!lookup.has(new_key) || will_move.has(new_key)) {
                insert(new_block);
            }
            else if (did_move.has(old_key)) {
                o--;
            }
            else if (deltas.get(new_key) > deltas.get(old_key)) {
                did_move.add(new_key);
                insert(new_block);
            }
            else {
                will_move.add(old_key);
                o--;
            }
        }
        while (o--) {
            const old_block = old_blocks[o];
            if (!new_lookup.has(old_block.key))
                destroy(old_block, lookup);
        }
        while (n)
            insert(new_blocks[n - 1]);
        return new_blocks;
    }
    function validate_each_keys(ctx, list, get_context, get_key) {
        const keys = new Set();
        for (let i = 0; i < list.length; i++) {
            const key = get_key(get_context(ctx, list, i));
            if (keys.has(key)) {
                throw new Error('Cannot have duplicate keys in a keyed each');
            }
            keys.add(key);
        }
    }

    function get_spread_update(levels, updates) {
        const update = {};
        const to_null_out = {};
        const accounted_for = { $$scope: 1 };
        let i = levels.length;
        while (i--) {
            const o = levels[i];
            const n = updates[i];
            if (n) {
                for (const key in o) {
                    if (!(key in n))
                        to_null_out[key] = 1;
                }
                for (const key in n) {
                    if (!accounted_for[key]) {
                        update[key] = n[key];
                        accounted_for[key] = 1;
                    }
                }
                levels[i] = n;
            }
            else {
                for (const key in o) {
                    accounted_for[key] = 1;
                }
            }
        }
        for (const key in to_null_out) {
            if (!(key in update))
                update[key] = undefined;
        }
        return update;
    }
    function get_spread_object(spread_props) {
        return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
    }
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor, customElement) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
            // onMount happens before the initial afterUpdate
            add_render_callback(() => {
                const new_on_destroy = on_mount.map(run).filter(is_function);
                if (on_destroy) {
                    on_destroy.push(...new_on_destroy);
                }
                else {
                    // Edge case - component was destroyed immediately,
                    // most likely as a result of a binding initialising
                    run_all(new_on_destroy);
                }
                component.$$.on_mount = [];
            });
        }
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(parent_component ? parent_component.$$.context : options.context || []),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false
        };
        let ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.38.2' }, detail)));
    }
    function append_dev(target, node) {
        dispatch_dev('SvelteDOMInsert', { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev('SvelteDOMInsert', { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev('SvelteDOMRemove', { node });
        detach(node);
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
        else
            dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
    }
    function set_data_dev(text, data) {
        data = '' + data;
        if (text.wholeText === data)
            return;
        dispatch_dev('SvelteDOMSetData', { node: text, data });
        text.data = data;
    }
    function validate_each_argument(arg) {
        if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
            let msg = '{#each} only iterates over array-like objects.';
            if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
                msg += ' You can use a spread to convert this iterable into an array.';
            }
            throw new Error(msg);
        }
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    /**
     * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
     */
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error("'target' is a required option");
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn('Component was already destroyed'); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    /* src\UI\Header.svelte generated by Svelte v3.38.2 */

    const file$a = "src\\UI\\Header.svelte";

    function create_fragment$c(ctx) {
    	let header;
    	let div3;
    	let div2;
    	let div0;
    	let a0;
    	let img;
    	let img_src_value;
    	let t0;
    	let div1;
    	let form;
    	let input;
    	let t1;
    	let button0;
    	let t3;
    	let nav;
    	let div10;
    	let button1;
    	let span0;
    	let t4;
    	let div8;
    	let ul;
    	let li0;
    	let a1;
    	let t5;
    	let span1;
    	let t7;
    	let li1;
    	let a2;
    	let t9;
    	let li2;
    	let a3;
    	let t11;
    	let div5;
    	let a4;
    	let t13;
    	let a5;
    	let t15;
    	let a6;
    	let t17;
    	let div4;
    	let t18;
    	let a7;
    	let t20;
    	let li3;
    	let a8;
    	let t22;
    	let div7;
    	let a9;
    	let t24;
    	let a10;
    	let t26;
    	let a11;
    	let t28;
    	let div6;
    	let t29;
    	let a12;
    	let t31;
    	let div9;
    	let a13;
    	let i0;
    	let t32;
    	let a14;
    	let i1;
    	let t33;
    	let a15;
    	let i2;
    	let t34;
    	let a16;
    	let i3;
    	let t35;
    	let a17;
    	let i4;

    	const block = {
    		c: function create() {
    			header = element("header");
    			div3 = element("div");
    			div2 = element("div");
    			div0 = element("div");
    			a0 = element("a");
    			img = element("img");
    			t0 = space();
    			div1 = element("div");
    			form = element("form");
    			input = element("input");
    			t1 = space();
    			button0 = element("button");
    			button0.textContent = "Buscar";
    			t3 = space();
    			nav = element("nav");
    			div10 = element("div");
    			button1 = element("button");
    			span0 = element("span");
    			t4 = space();
    			div8 = element("div");
    			ul = element("ul");
    			li0 = element("li");
    			a1 = element("a");
    			t5 = text("Inicio\r\n                ");
    			span1 = element("span");
    			span1.textContent = "(Actual)";
    			t7 = space();
    			li1 = element("li");
    			a2 = element("a");
    			a2.textContent = "Categoría 1";
    			t9 = space();
    			li2 = element("li");
    			a3 = element("a");
    			a3.textContent = "Categoría 2";
    			t11 = space();
    			div5 = element("div");
    			a4 = element("a");
    			a4.textContent = "Subcategoría 1";
    			t13 = space();
    			a5 = element("a");
    			a5.textContent = "Subcategoría 2";
    			t15 = space();
    			a6 = element("a");
    			a6.textContent = "Subcategoría 3";
    			t17 = space();
    			div4 = element("div");
    			t18 = space();
    			a7 = element("a");
    			a7.textContent = "Subcategoría 4";
    			t20 = space();
    			li3 = element("li");
    			a8 = element("a");
    			a8.textContent = "Categoría 3";
    			t22 = space();
    			div7 = element("div");
    			a9 = element("a");
    			a9.textContent = "Subcategoría 1";
    			t24 = space();
    			a10 = element("a");
    			a10.textContent = "Subcategoría 2";
    			t26 = space();
    			a11 = element("a");
    			a11.textContent = "Subcategoría 3";
    			t28 = space();
    			div6 = element("div");
    			t29 = space();
    			a12 = element("a");
    			a12.textContent = "Subcategoría 4";
    			t31 = space();
    			div9 = element("div");
    			a13 = element("a");
    			i0 = element("i");
    			t32 = space();
    			a14 = element("a");
    			i1 = element("i");
    			t33 = space();
    			a15 = element("a");
    			i2 = element("i");
    			t34 = space();
    			a16 = element("a");
    			i3 = element("i");
    			t35 = space();
    			a17 = element("a");
    			i4 = element("i");
    			if (img.src !== (img_src_value = "https://www.brazaletesmexico.com/wp-content/uploads/logo-brazaletes-mexico.png")) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "Logo brazaletes mx");
    			add_location(img, file$a, 10, 12, 200);
    			attr_dev(a0, "href", "");
    			add_location(a0, file$a, 9, 12, 178);
    			attr_dev(div0, "class", "col-12 col-sm-12 col-md-6");
    			add_location(div0, file$a, 8, 8, 125);
    			attr_dev(input, "class", "\r\n                form-control form-control-sm\r\n                border border-secondary\r\n                me-sm-2\r\n                ");
    			attr_dev(input, "type", "text");
    			attr_dev(input, "placeholder", "Búsqueda");
    			add_location(input, file$a, 15, 12, 449);
    			attr_dev(button0, "class", "btn btn-sm btn-outline-secondary my-2 my-sm-0");
    			attr_dev(button0, "type", "submit");
    			add_location(button0, file$a, 24, 12, 710);
    			attr_dev(form, "class", "d-flex");
    			add_location(form, file$a, 14, 12, 414);
    			attr_dev(div1, "class", "col-12 col-sm-12 col-md-6");
    			add_location(div1, file$a, 13, 8, 361);
    			attr_dev(div2, "class", "row align-items-center py-3");
    			add_location(div2, file$a, 7, 8, 74);
    			attr_dev(div3, "class", "container");
    			add_location(div3, file$a, 6, 4, 41);
    			attr_dev(span0, "class", "navbar-toggler-icon");
    			add_location(span0, file$a, 46, 12, 1360);
    			attr_dev(button1, "class", "navbar-toggler");
    			attr_dev(button1, "type", "button");
    			attr_dev(button1, "data-bs-toggle", "collapse");
    			attr_dev(button1, "data-bs-target", "#navbarColor02");
    			attr_dev(button1, "aria-controls", "navbarColor02");
    			attr_dev(button1, "aria-expanded", "false");
    			attr_dev(button1, "aria-label", "Toggle navigation");
    			add_location(button1, file$a, 37, 8, 1059);
    			attr_dev(span1, "class", "visually-hidden");
    			add_location(span1, file$a, 54, 16, 1661);
    			attr_dev(a1, "class", "nav-link active");
    			attr_dev(a1, "href", "");
    			add_location(a1, file$a, 52, 16, 1587);
    			attr_dev(li0, "class", "nav-item");
    			add_location(li0, file$a, 51, 12, 1548);
    			attr_dev(a2, "class", "nav-link");
    			attr_dev(a2, "href", "");
    			add_location(a2, file$a, 58, 16, 1800);
    			attr_dev(li1, "class", "nav-item");
    			add_location(li1, file$a, 57, 12, 1761);
    			attr_dev(a3, "class", "nav-link dropdown-toggle");
    			attr_dev(a3, "data-bs-toggle", "dropdown");
    			attr_dev(a3, "href", "");
    			attr_dev(a3, "role", "button");
    			attr_dev(a3, "aria-haspopup", "true");
    			attr_dev(a3, "aria-expanded", "false");
    			add_location(a3, file$a, 61, 16, 1921);
    			attr_dev(a4, "class", "dropdown-item");
    			attr_dev(a4, "href", "");
    			add_location(a4, file$a, 72, 16, 2279);
    			attr_dev(a5, "class", "dropdown-item");
    			attr_dev(a5, "href", "");
    			add_location(a5, file$a, 73, 16, 2345);
    			attr_dev(a6, "class", "dropdown-item");
    			attr_dev(a6, "href", "");
    			add_location(a6, file$a, 74, 16, 2411);
    			attr_dev(div4, "class", "dropdown-divider");
    			add_location(div4, file$a, 75, 16, 2477);
    			attr_dev(a7, "class", "dropdown-item");
    			attr_dev(a7, "href", "");
    			add_location(a7, file$a, 76, 16, 2531);
    			attr_dev(div5, "class", "dropdown-menu");
    			add_location(div5, file$a, 71, 16, 2234);
    			attr_dev(li2, "class", "nav-item dropdown");
    			add_location(li2, file$a, 60, 12, 1873);
    			attr_dev(a8, "class", "nav-link dropdown-toggle");
    			attr_dev(a8, "data-bs-toggle", "dropdown");
    			attr_dev(a8, "href", "");
    			attr_dev(a8, "role", "button");
    			attr_dev(a8, "aria-haspopup", "true");
    			attr_dev(a8, "aria-expanded", "false");
    			add_location(a8, file$a, 80, 16, 2684);
    			attr_dev(a9, "class", "dropdown-item");
    			attr_dev(a9, "href", "");
    			add_location(a9, file$a, 91, 16, 3042);
    			attr_dev(a10, "class", "dropdown-item");
    			attr_dev(a10, "href", "");
    			add_location(a10, file$a, 92, 16, 3108);
    			attr_dev(a11, "class", "dropdown-item");
    			attr_dev(a11, "href", "");
    			add_location(a11, file$a, 93, 16, 3174);
    			attr_dev(div6, "class", "dropdown-divider");
    			add_location(div6, file$a, 94, 16, 3240);
    			attr_dev(a12, "class", "dropdown-item");
    			attr_dev(a12, "href", "");
    			add_location(a12, file$a, 95, 16, 3294);
    			attr_dev(div7, "class", "dropdown-menu");
    			add_location(div7, file$a, 90, 16, 2997);
    			attr_dev(li3, "class", "nav-item dropdown");
    			add_location(li3, file$a, 79, 12, 2636);
    			attr_dev(ul, "class", "navbar-nav me-auto");
    			add_location(ul, file$a, 50, 12, 1503);
    			attr_dev(div8, "class", "collapse navbar-collapse");
    			attr_dev(div8, "id", "navbarColor02");
    			add_location(div8, file$a, 49, 8, 1432);
    			attr_dev(i0, "class", "fab fa-instagram-square fa-lg");
    			add_location(i0, file$a, 103, 12, 3517);
    			attr_dev(a13, "href", "");
    			attr_dev(a13, "class", "link-secondary text-decoration-none");
    			add_location(a13, file$a, 102, 12, 3451);
    			attr_dev(i1, "class", "fab fa-facebook-square fa-lg");
    			add_location(i1, file$a, 106, 12, 3660);
    			attr_dev(a14, "href", "");
    			attr_dev(a14, "class", "link-secondary text-decoration-none");
    			add_location(a14, file$a, 105, 12, 3594);
    			attr_dev(i2, "class", "fab fa-twitter-square fa-lg");
    			add_location(i2, file$a, 109, 12, 3802);
    			attr_dev(a15, "href", "");
    			attr_dev(a15, "class", "link-secondary text-decoration-none");
    			add_location(a15, file$a, 108, 12, 3736);
    			attr_dev(i3, "class", "fab fa-youtube-square fa-lg");
    			add_location(i3, file$a, 112, 12, 3943);
    			attr_dev(a16, "href", "");
    			attr_dev(a16, "class", "link-secondary text-decoration-none");
    			add_location(a16, file$a, 111, 12, 3877);
    			attr_dev(i4, "class", "fab fa-linkedin fa-lg");
    			add_location(i4, file$a, 115, 12, 4084);
    			attr_dev(a17, "href", "");
    			attr_dev(a17, "class", "link-secondary text-decoration-none");
    			add_location(a17, file$a, 114, 12, 4018);
    			add_location(div9, file$a, 101, 8, 3432);
    			attr_dev(div10, "class", "container");
    			add_location(div10, file$a, 36, 8, 1026);
    			attr_dev(nav, "class", "navbar navbar-expand-lg navbar-dark bg-dark py-2");
    			add_location(nav, file$a, 35, 4, 954);
    			add_location(header, file$a, 5, 0, 27);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, header, anchor);
    			append_dev(header, div3);
    			append_dev(div3, div2);
    			append_dev(div2, div0);
    			append_dev(div0, a0);
    			append_dev(a0, img);
    			append_dev(div2, t0);
    			append_dev(div2, div1);
    			append_dev(div1, form);
    			append_dev(form, input);
    			append_dev(form, t1);
    			append_dev(form, button0);
    			append_dev(header, t3);
    			append_dev(header, nav);
    			append_dev(nav, div10);
    			append_dev(div10, button1);
    			append_dev(button1, span0);
    			append_dev(div10, t4);
    			append_dev(div10, div8);
    			append_dev(div8, ul);
    			append_dev(ul, li0);
    			append_dev(li0, a1);
    			append_dev(a1, t5);
    			append_dev(a1, span1);
    			append_dev(ul, t7);
    			append_dev(ul, li1);
    			append_dev(li1, a2);
    			append_dev(ul, t9);
    			append_dev(ul, li2);
    			append_dev(li2, a3);
    			append_dev(li2, t11);
    			append_dev(li2, div5);
    			append_dev(div5, a4);
    			append_dev(div5, t13);
    			append_dev(div5, a5);
    			append_dev(div5, t15);
    			append_dev(div5, a6);
    			append_dev(div5, t17);
    			append_dev(div5, div4);
    			append_dev(div5, t18);
    			append_dev(div5, a7);
    			append_dev(ul, t20);
    			append_dev(ul, li3);
    			append_dev(li3, a8);
    			append_dev(li3, t22);
    			append_dev(li3, div7);
    			append_dev(div7, a9);
    			append_dev(div7, t24);
    			append_dev(div7, a10);
    			append_dev(div7, t26);
    			append_dev(div7, a11);
    			append_dev(div7, t28);
    			append_dev(div7, div6);
    			append_dev(div7, t29);
    			append_dev(div7, a12);
    			append_dev(div10, t31);
    			append_dev(div10, div9);
    			append_dev(div9, a13);
    			append_dev(a13, i0);
    			append_dev(div9, t32);
    			append_dev(div9, a14);
    			append_dev(a14, i1);
    			append_dev(div9, t33);
    			append_dev(div9, a15);
    			append_dev(a15, i2);
    			append_dev(div9, t34);
    			append_dev(div9, a16);
    			append_dev(a16, i3);
    			append_dev(div9, t35);
    			append_dev(div9, a17);
    			append_dev(a17, i4);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(header);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$c.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$c($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Header", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Header> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Header extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$c, create_fragment$c, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Header",
    			options,
    			id: create_fragment$c.name
    		});
    	}
    }

    /* src\UI\Footer.svelte generated by Svelte v3.38.2 */

    const file$9 = "src\\UI\\Footer.svelte";

    function create_fragment$b(ctx) {
    	let footer;
    	let div4;
    	let div3;
    	let div0;
    	let p0;
    	let strong0;
    	let t1;
    	let address0;
    	let t2;
    	let br0;
    	let t3;
    	let br1;
    	let t4;
    	let abbr;
    	let t6;
    	let t7;
    	let address1;
    	let strong1;
    	let br2;
    	let t9;
    	let a0;
    	let t11;
    	let address2;
    	let strong2;
    	let br3;
    	let t13;
    	let a1;
    	let t15;
    	let div1;
    	let p1;
    	let strong3;
    	let t17;
    	let ul0;
    	let li0;
    	let a2;
    	let t19;
    	let li1;
    	let a3;
    	let t21;
    	let li2;
    	let a4;
    	let t23;
    	let li3;
    	let a5;
    	let t25;
    	let li4;
    	let a6;
    	let t27;
    	let li5;
    	let a7;
    	let t29;
    	let div2;
    	let p2;
    	let strong4;
    	let t31;
    	let ul1;
    	let li6;
    	let i0;
    	let t32;
    	let t33;
    	let li7;
    	let i1;
    	let t34;
    	let t35;
    	let li8;
    	let i2;
    	let t36;
    	let t37;
    	let li9;
    	let i3;
    	let t38;
    	let t39;
    	let li10;
    	let i4;
    	let t40;

    	const block = {
    		c: function create() {
    			footer = element("footer");
    			div4 = element("div");
    			div3 = element("div");
    			div0 = element("div");
    			p0 = element("p");
    			strong0 = element("strong");
    			strong0.textContent = "BRAZALETES MÉXICO";
    			t1 = space();
    			address0 = element("address");
    			t2 = text("Sm 301, Mza 4, Lote 5, Central de ");
    			br0 = element("br");
    			t3 = text("\r\n            Abastos, 77536, Cancún, Q.R. ");
    			br1 = element("br");
    			t4 = space();
    			abbr = element("abbr");
    			abbr.textContent = "P:";
    			t6 = text(" (123) 456-7890");
    			t7 = space();
    			address1 = element("address");
    			strong1 = element("strong");
    			strong1.textContent = "Email contact";
    			br2 = element("br");
    			t9 = space();
    			a0 = element("a");
    			a0.textContent = "first.last@example.com";
    			t11 = space();
    			address2 = element("address");
    			strong2 = element("strong");
    			strong2.textContent = "Phone Number 1";
    			br3 = element("br");
    			t13 = space();
    			a1 = element("a");
    			a1.textContent = "555555555";
    			t15 = space();
    			div1 = element("div");
    			p1 = element("p");
    			strong3 = element("strong");
    			strong3.textContent = "Referred Links";
    			t17 = space();
    			ul0 = element("ul");
    			li0 = element("li");
    			a2 = element("a");
    			a2.textContent = "About Us";
    			t19 = space();
    			li1 = element("li");
    			a3 = element("a");
    			a3.textContent = "Contact";
    			t21 = space();
    			li2 = element("li");
    			a4 = element("a");
    			a4.textContent = "Terms and conditions";
    			t23 = space();
    			li3 = element("li");
    			a5 = element("a");
    			a5.textContent = "Privacy policy";
    			t25 = space();
    			li4 = element("li");
    			a6 = element("a");
    			a6.textContent = "Site Map";
    			t27 = space();
    			li5 = element("li");
    			a7 = element("a");
    			a7.textContent = "Shipping";
    			t29 = space();
    			div2 = element("div");
    			p2 = element("p");
    			strong4 = element("strong");
    			strong4.textContent = "Social Networks";
    			t31 = space();
    			ul1 = element("ul");
    			li6 = element("li");
    			i0 = element("i");
    			t32 = text(" @username");
    			t33 = space();
    			li7 = element("li");
    			i1 = element("i");
    			t34 = text(" @username");
    			t35 = space();
    			li8 = element("li");
    			i2 = element("i");
    			t36 = text(" @username");
    			t37 = space();
    			li9 = element("li");
    			i3 = element("i");
    			t38 = text(" /username");
    			t39 = space();
    			li10 = element("li");
    			i4 = element("i");
    			t40 = text(" /username");
    			add_location(strong0, file$9, 4, 11, 135);
    			add_location(p0, file$9, 4, 8, 132);
    			add_location(br0, file$9, 6, 46, 254);
    			add_location(br1, file$9, 7, 41, 301);
    			attr_dev(abbr, "title", "Phone");
    			add_location(abbr, file$9, 8, 12, 319);
    			attr_dev(address0, "class", "small");
    			add_location(address0, file$9, 5, 8, 183);
    			add_location(strong1, file$9, 11, 12, 430);
    			add_location(br2, file$9, 11, 42, 460);
    			attr_dev(a0, "href", "mailto:first.last@example.com");
    			add_location(a0, file$9, 12, 12, 478);
    			attr_dev(address1, "class", "small");
    			add_location(address1, file$9, 10, 8, 393);
    			add_location(strong2, file$9, 15, 12, 611);
    			add_location(br3, file$9, 15, 43, 642);
    			attr_dev(a1, "href", "tel:555555555");
    			add_location(a1, file$9, 16, 12, 660);
    			attr_dev(address2, "class", "small");
    			add_location(address2, file$9, 14, 8, 574);
    			attr_dev(div0, "class", "col");
    			add_location(div0, file$9, 3, 8, 105);
    			add_location(strong3, file$9, 21, 11, 775);
    			add_location(p1, file$9, 21, 8, 772);
    			attr_dev(a2, "class", "link-light");
    			attr_dev(a2, "href", "");
    			add_location(a2, file$9, 24, 12, 897);
    			attr_dev(li0, "class", "mb-2 small");
    			add_location(li0, file$9, 23, 12, 860);
    			attr_dev(a3, "class", "link-light");
    			attr_dev(a3, "href", "");
    			add_location(a3, file$9, 27, 12, 1006);
    			attr_dev(li1, "class", "mb-2 small");
    			add_location(li1, file$9, 26, 12, 969);
    			attr_dev(a4, "class", "link-light");
    			attr_dev(a4, "href", "");
    			add_location(a4, file$9, 30, 12, 1114);
    			attr_dev(li2, "class", "mb-2 small");
    			add_location(li2, file$9, 29, 12, 1077);
    			attr_dev(a5, "class", "link-light");
    			attr_dev(a5, "href", "");
    			add_location(a5, file$9, 33, 12, 1235);
    			attr_dev(li3, "class", "mb-2 small");
    			add_location(li3, file$9, 32, 12, 1198);
    			attr_dev(a6, "class", "link-light");
    			attr_dev(a6, "href", "");
    			add_location(a6, file$9, 36, 12, 1350);
    			attr_dev(li4, "class", "mb-2 small");
    			add_location(li4, file$9, 35, 12, 1313);
    			attr_dev(a7, "class", "link-light");
    			attr_dev(a7, "href", "");
    			add_location(a7, file$9, 39, 12, 1454);
    			attr_dev(li5, "class", "small");
    			add_location(li5, file$9, 38, 12, 1422);
    			attr_dev(ul0, "class", "list-unstyled");
    			add_location(ul0, file$9, 22, 8, 820);
    			attr_dev(div1, "class", "col");
    			add_location(div1, file$9, 20, 8, 745);
    			add_location(strong4, file$9, 45, 11, 1593);
    			add_location(p2, file$9, 45, 8, 1590);
    			attr_dev(i0, "class", "fab fa-instagram-square fa-lg");
    			add_location(i0, file$9, 47, 35, 1702);
    			attr_dev(li6, "class", "mb-2 small");
    			add_location(li6, file$9, 47, 12, 1679);
    			attr_dev(i1, "class", "fab fa-facebook-square fa-lg");
    			add_location(i1, file$9, 48, 35, 1799);
    			attr_dev(li7, "class", "mb-2 small");
    			add_location(li7, file$9, 48, 12, 1776);
    			attr_dev(i2, "class", "fab fa-twitter-square fa-lg");
    			add_location(i2, file$9, 49, 35, 1895);
    			attr_dev(li8, "class", "mb-2 small");
    			add_location(li8, file$9, 49, 12, 1872);
    			attr_dev(i3, "class", "fab fa-youtube-square fa-lg");
    			add_location(i3, file$9, 50, 35, 1990);
    			attr_dev(li9, "class", "mb-2 small");
    			add_location(li9, file$9, 50, 12, 1967);
    			attr_dev(i4, "class", "fab fa-linkedin fa-lg");
    			add_location(i4, file$9, 51, 30, 2080);
    			attr_dev(li10, "class", "small");
    			add_location(li10, file$9, 51, 12, 2062);
    			attr_dev(ul1, "class", "list-unstyled");
    			add_location(ul1, file$9, 46, 8, 1639);
    			attr_dev(div2, "class", "col");
    			add_location(div2, file$9, 44, 8, 1563);
    			attr_dev(div3, "class", "row");
    			add_location(div3, file$9, 2, 4, 78);
    			attr_dev(div4, "class", "container");
    			add_location(div4, file$9, 1, 4, 49);
    			attr_dev(footer, "class", "bg-primary text-white pt-3");
    			add_location(footer, file$9, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, footer, anchor);
    			append_dev(footer, div4);
    			append_dev(div4, div3);
    			append_dev(div3, div0);
    			append_dev(div0, p0);
    			append_dev(p0, strong0);
    			append_dev(div0, t1);
    			append_dev(div0, address0);
    			append_dev(address0, t2);
    			append_dev(address0, br0);
    			append_dev(address0, t3);
    			append_dev(address0, br1);
    			append_dev(address0, t4);
    			append_dev(address0, abbr);
    			append_dev(address0, t6);
    			append_dev(div0, t7);
    			append_dev(div0, address1);
    			append_dev(address1, strong1);
    			append_dev(address1, br2);
    			append_dev(address1, t9);
    			append_dev(address1, a0);
    			append_dev(div0, t11);
    			append_dev(div0, address2);
    			append_dev(address2, strong2);
    			append_dev(address2, br3);
    			append_dev(address2, t13);
    			append_dev(address2, a1);
    			append_dev(div3, t15);
    			append_dev(div3, div1);
    			append_dev(div1, p1);
    			append_dev(p1, strong3);
    			append_dev(div1, t17);
    			append_dev(div1, ul0);
    			append_dev(ul0, li0);
    			append_dev(li0, a2);
    			append_dev(ul0, t19);
    			append_dev(ul0, li1);
    			append_dev(li1, a3);
    			append_dev(ul0, t21);
    			append_dev(ul0, li2);
    			append_dev(li2, a4);
    			append_dev(ul0, t23);
    			append_dev(ul0, li3);
    			append_dev(li3, a5);
    			append_dev(ul0, t25);
    			append_dev(ul0, li4);
    			append_dev(li4, a6);
    			append_dev(ul0, t27);
    			append_dev(ul0, li5);
    			append_dev(li5, a7);
    			append_dev(div3, t29);
    			append_dev(div3, div2);
    			append_dev(div2, p2);
    			append_dev(p2, strong4);
    			append_dev(div2, t31);
    			append_dev(div2, ul1);
    			append_dev(ul1, li6);
    			append_dev(li6, i0);
    			append_dev(li6, t32);
    			append_dev(ul1, t33);
    			append_dev(ul1, li7);
    			append_dev(li7, i1);
    			append_dev(li7, t34);
    			append_dev(ul1, t35);
    			append_dev(ul1, li8);
    			append_dev(li8, i2);
    			append_dev(li8, t36);
    			append_dev(ul1, t37);
    			append_dev(ul1, li9);
    			append_dev(li9, i3);
    			append_dev(li9, t38);
    			append_dev(ul1, t39);
    			append_dev(ul1, li10);
    			append_dev(li10, i4);
    			append_dev(li10, t40);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(footer);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$b.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$b($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Footer", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Footer> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Footer extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$b, create_fragment$b, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Footer",
    			options,
    			id: create_fragment$b.name
    		});
    	}
    }

    /* src\UI\Template.svelte generated by Svelte v3.38.2 */

    function create_fragment$a(ctx) {
    	let header;
    	let t0;
    	let t1;
    	let footer;
    	let current;
    	header = new Header({ $$inline: true });
    	const default_slot_template = /*#slots*/ ctx[1].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[0], null);
    	footer = new Footer({ $$inline: true });

    	const block = {
    		c: function create() {
    			create_component(header.$$.fragment);
    			t0 = space();
    			if (default_slot) default_slot.c();
    			t1 = space();
    			create_component(footer.$$.fragment);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(header, target, anchor);
    			insert_dev(target, t0, anchor);

    			if (default_slot) {
    				default_slot.m(target, anchor);
    			}

    			insert_dev(target, t1, anchor);
    			mount_component(footer, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 1)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[0], dirty, null, null);
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(header.$$.fragment, local);
    			transition_in(default_slot, local);
    			transition_in(footer.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(header.$$.fragment, local);
    			transition_out(default_slot, local);
    			transition_out(footer.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(header, detaching);
    			if (detaching) detach_dev(t0);
    			if (default_slot) default_slot.d(detaching);
    			if (detaching) detach_dev(t1);
    			destroy_component(footer, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$a.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$a($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Template", slots, ['default']);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Template> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("$$scope" in $$props) $$invalidate(0, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({ Header, Footer });
    	return [$$scope, slots];
    }

    class Template extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$a, create_fragment$a, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Template",
    			options,
    			id: create_fragment$a.name
    		});
    	}
    }

    /* src\UI\Carousel.svelte generated by Svelte v3.38.2 */

    const file$8 = "src\\UI\\Carousel.svelte";

    function create_fragment$9(ctx) {
    	let div5;
    	let div4;
    	let div3;
    	let div0;
    	let img0;
    	let img0_src_value;
    	let t0;
    	let div1;
    	let img1;
    	let img1_src_value;
    	let t1;
    	let div2;
    	let img2;
    	let img2_src_value;
    	let t2;
    	let button0;
    	let span0;
    	let t3;
    	let span1;
    	let t5;
    	let button1;
    	let span2;
    	let t6;
    	let span3;

    	const block = {
    		c: function create() {
    			div5 = element("div");
    			div4 = element("div");
    			div3 = element("div");
    			div0 = element("div");
    			img0 = element("img");
    			t0 = space();
    			div1 = element("div");
    			img1 = element("img");
    			t1 = space();
    			div2 = element("div");
    			img2 = element("img");
    			t2 = space();
    			button0 = element("button");
    			span0 = element("span");
    			t3 = space();
    			span1 = element("span");
    			span1.textContent = "Previous";
    			t5 = space();
    			button1 = element("button");
    			span2 = element("span");
    			t6 = space();
    			span3 = element("span");
    			span3.textContent = "Next";
    			if (img0.src !== (img0_src_value = "https://www.brazaletesmexico.com/wp-content/uploads/brazaletes-en-mexico-de-seguridad-tyvek2.jpg")) attr_dev(img0, "src", img0_src_value);
    			attr_dev(img0, "class", "d-block w-100");
    			attr_dev(img0, "alt", "https://via.placeholder.com/600x250");
    			add_location(img0, file$8, 8, 8, 224);
    			attr_dev(div0, "class", "carousel-item active");
    			add_location(div0, file$8, 7, 8, 180);
    			if (img1.src !== (img1_src_value = "https://www.brazaletesmexico.com/wp-content/uploads/banner-tienda-en-linea.jpg")) attr_dev(img1, "src", img1_src_value);
    			attr_dev(img1, "class", "d-block w-100");
    			attr_dev(img1, "alt", "https://via.placeholder.com/600x250");
    			add_location(img1, file$8, 15, 8, 509);
    			attr_dev(div1, "class", "carousel-item");
    			add_location(div1, file$8, 14, 8, 472);
    			if (img2.src !== (img2_src_value = "https://www.brazaletesmexico.com/wp-content/uploads/brazaletes-rfdi-en-mexico-seguridad.jpg")) attr_dev(img2, "src", img2_src_value);
    			attr_dev(img2, "class", "d-block w-100");
    			attr_dev(img2, "alt", "https://via.placeholder.com/600x250");
    			add_location(img2, file$8, 22, 8, 776);
    			attr_dev(div2, "class", "carousel-item");
    			add_location(div2, file$8, 21, 8, 739);
    			attr_dev(div3, "class", "carousel-inner");
    			add_location(div3, file$8, 6, 4, 142);
    			attr_dev(span0, "class", "carousel-control-prev-icon");
    			attr_dev(span0, "aria-hidden", "true");
    			add_location(span0, file$8, 35, 8, 1194);
    			attr_dev(span1, "class", "visually-hidden");
    			add_location(span1, file$8, 36, 8, 1271);
    			attr_dev(button0, "class", "carousel-control-prev");
    			attr_dev(button0, "type", "button");
    			attr_dev(button0, "data-bs-target", "#carouselExampleControls");
    			attr_dev(button0, "data-bs-slide", "prev");
    			add_location(button0, file$8, 29, 4, 1027);
    			attr_dev(span2, "class", "carousel-control-next-icon");
    			attr_dev(span2, "aria-hidden", "true");
    			add_location(span2, file$8, 44, 8, 1504);
    			attr_dev(span3, "class", "visually-hidden");
    			add_location(span3, file$8, 45, 8, 1581);
    			attr_dev(button1, "class", "carousel-control-next");
    			attr_dev(button1, "type", "button");
    			attr_dev(button1, "data-bs-target", "#carouselExampleControls");
    			attr_dev(button1, "data-bs-slide", "next");
    			add_location(button1, file$8, 38, 4, 1337);
    			attr_dev(div4, "id", "carouselExampleControls");
    			attr_dev(div4, "class", "carousel slide");
    			attr_dev(div4, "data-bs-ride", "carousel");
    			add_location(div4, file$8, 1, 4, 34);
    			attr_dev(div5, "class", "container my-4");
    			add_location(div5, file$8, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div5, anchor);
    			append_dev(div5, div4);
    			append_dev(div4, div3);
    			append_dev(div3, div0);
    			append_dev(div0, img0);
    			append_dev(div3, t0);
    			append_dev(div3, div1);
    			append_dev(div1, img1);
    			append_dev(div3, t1);
    			append_dev(div3, div2);
    			append_dev(div2, img2);
    			append_dev(div4, t2);
    			append_dev(div4, button0);
    			append_dev(button0, span0);
    			append_dev(button0, t3);
    			append_dev(button0, span1);
    			append_dev(div4, t5);
    			append_dev(div4, button1);
    			append_dev(button1, span2);
    			append_dev(button1, t6);
    			append_dev(button1, span3);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div5);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$9.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$9($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Carousel", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Carousel> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Carousel extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$9, create_fragment$9, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Carousel",
    			options,
    			id: create_fragment$9.name
    		});
    	}
    }

    /* src\UI\EventCard.svelte generated by Svelte v3.38.2 */

    const file$7 = "src\\UI\\EventCard.svelte";

    function create_fragment$8(ctx) {
    	let div1;
    	let div0;
    	let button;
    	let t;

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			div0 = element("div");
    			button = element("button");
    			t = text(/*eventType*/ ctx[1]);
    			attr_dev(button, "class", "btn btn-primary");
    			add_location(button, file$7, 7, 8, 194);
    			attr_dev(div0, "class", "card event-card margin-0 svelte-mjder8");
    			set_style(div0, "background-image", "url(" + /*url*/ ctx[0] + ")");
    			add_location(div0, file$7, 6, 4, 108);
    			attr_dev(div1, "class", "col");
    			add_location(div1, file$7, 5, 0, 85);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, div0);
    			append_dev(div0, button);
    			append_dev(button, t);
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*eventType*/ 2) set_data_dev(t, /*eventType*/ ctx[1]);

    			if (dirty & /*url*/ 1) {
    				set_style(div0, "background-image", "url(" + /*url*/ ctx[0] + ")");
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$8.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$8($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("EventCard", slots, []);
    	let { url = null } = $$props;
    	let { eventType = null } = $$props;
    	const writable_props = ["url", "eventType"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<EventCard> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("url" in $$props) $$invalidate(0, url = $$props.url);
    		if ("eventType" in $$props) $$invalidate(1, eventType = $$props.eventType);
    	};

    	$$self.$capture_state = () => ({ url, eventType });

    	$$self.$inject_state = $$props => {
    		if ("url" in $$props) $$invalidate(0, url = $$props.url);
    		if ("eventType" in $$props) $$invalidate(1, eventType = $$props.eventType);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [url, eventType];
    }

    class EventCard extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$8, create_fragment$8, safe_not_equal, { url: 0, eventType: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "EventCard",
    			options,
    			id: create_fragment$8.name
    		});
    	}

    	get url() {
    		throw new Error("<EventCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set url(value) {
    		throw new Error("<EventCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get eventType() {
    		throw new Error("<EventCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set eventType(value) {
    		throw new Error("<EventCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\UI\EventsGrid.svelte generated by Svelte v3.38.2 */
    const file$6 = "src\\UI\\EventsGrid.svelte";

    function get_each_context$2(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[1] = list[i];
    	return child_ctx;
    }

    // (9:8) {#each eventCards as eventCard (eventCard.id)}
    function create_each_block$2(key_1, ctx) {
    	let first;
    	let eventcard;
    	let current;

    	eventcard = new EventCard({
    			props: {
    				url: /*eventCard*/ ctx[1].url,
    				eventType: /*eventCard*/ ctx[1].title
    			},
    			$$inline: true
    		});

    	const block = {
    		key: key_1,
    		first: null,
    		c: function create() {
    			first = empty();
    			create_component(eventcard.$$.fragment);
    			this.first = first;
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, first, anchor);
    			mount_component(eventcard, target, anchor);
    			current = true;
    		},
    		p: function update(new_ctx, dirty) {
    			ctx = new_ctx;
    			const eventcard_changes = {};
    			if (dirty & /*eventCards*/ 1) eventcard_changes.url = /*eventCard*/ ctx[1].url;
    			if (dirty & /*eventCards*/ 1) eventcard_changes.eventType = /*eventCard*/ ctx[1].title;
    			eventcard.$set(eventcard_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(eventcard.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(eventcard.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(first);
    			destroy_component(eventcard, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$2.name,
    		type: "each",
    		source: "(9:8) {#each eventCards as eventCard (eventCard.id)}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$7(ctx) {
    	let div1;
    	let div0;
    	let each_blocks = [];
    	let each_1_lookup = new Map();
    	let current;
    	let each_value = /*eventCards*/ ctx[0];
    	validate_each_argument(each_value);
    	const get_key = ctx => /*eventCard*/ ctx[1].id;
    	validate_each_keys(ctx, each_value, get_each_context$2, get_key);

    	for (let i = 0; i < each_value.length; i += 1) {
    		let child_ctx = get_each_context$2(ctx, each_value, i);
    		let key = get_key(child_ctx);
    		each_1_lookup.set(key, each_blocks[i] = create_each_block$2(key, child_ctx));
    	}

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			div0 = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(div0, "class", "row row-cols-1 row-cols-md-2 g-3");
    			add_location(div0, file$6, 7, 4, 145);
    			attr_dev(div1, "class", "container my-4");
    			add_location(div1, file$6, 6, 0, 111);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, div0);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div0, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*eventCards*/ 1) {
    				each_value = /*eventCards*/ ctx[0];
    				validate_each_argument(each_value);
    				group_outros();
    				validate_each_keys(ctx, each_value, get_each_context$2, get_key);
    				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div0, outro_and_destroy_block, create_each_block$2, null, get_each_context$2);
    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].d();
    			}
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$7.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$7($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("EventsGrid", slots, []);
    	let { eventCards = [] } = $$props;
    	const writable_props = ["eventCards"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<EventsGrid> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("eventCards" in $$props) $$invalidate(0, eventCards = $$props.eventCards);
    	};

    	$$self.$capture_state = () => ({ EventCard, eventCards });

    	$$self.$inject_state = $$props => {
    		if ("eventCards" in $$props) $$invalidate(0, eventCards = $$props.eventCards);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [eventCards];
    }

    class EventsGrid extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$7, create_fragment$7, safe_not_equal, { eventCards: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "EventsGrid",
    			options,
    			id: create_fragment$7.name
    		});
    	}

    	get eventCards() {
    		throw new Error("<EventsGrid>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set eventCards(value) {
    		throw new Error("<EventsGrid>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\UI\QuotationCard.svelte generated by Svelte v3.38.2 */

    const file$5 = "src\\UI\\QuotationCard.svelte";

    function create_fragment$6(ctx) {
    	let div2;
    	let div1;
    	let div0;
    	let h5;
    	let t0;
    	let t1;
    	let h6;
    	let t2;
    	let t3;
    	let img;
    	let img_src_value;

    	const block = {
    		c: function create() {
    			div2 = element("div");
    			div1 = element("div");
    			div0 = element("div");
    			h5 = element("h5");
    			t0 = text(/*category*/ ctx[1]);
    			t1 = space();
    			h6 = element("h6");
    			t2 = text(/*subcategory*/ ctx[2]);
    			t3 = space();
    			img = element("img");
    			attr_dev(h5, "class", "card-title text-center");
    			add_location(h5, file$5, 10, 12, 262);
    			attr_dev(h6, "class", "card-subtitle text-center text-muted");
    			add_location(h6, file$5, 11, 12, 326);
    			attr_dev(div0, "class", "card-body");
    			add_location(div0, file$5, 9, 8, 225);
    			if (img.src !== (img_src_value = /*url*/ ctx[3])) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", /*subcategory*/ ctx[2]);
    			add_location(img, file$5, 14, 8, 425);
    			attr_dev(div1, "class", "card quotation-card svelte-qvqjom");
    			add_location(div1, file$5, 8, 4, 178);
    			attr_dev(div2, "id", /*id*/ ctx[0]);
    			attr_dev(div2, "class", "col");
    			add_location(div2, file$5, 7, 0, 147);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div2, anchor);
    			append_dev(div2, div1);
    			append_dev(div1, div0);
    			append_dev(div0, h5);
    			append_dev(h5, t0);
    			append_dev(div0, t1);
    			append_dev(div0, h6);
    			append_dev(h6, t2);
    			append_dev(div1, t3);
    			append_dev(div1, img);
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*category*/ 2) set_data_dev(t0, /*category*/ ctx[1]);
    			if (dirty & /*subcategory*/ 4) set_data_dev(t2, /*subcategory*/ ctx[2]);

    			if (dirty & /*url*/ 8 && img.src !== (img_src_value = /*url*/ ctx[3])) {
    				attr_dev(img, "src", img_src_value);
    			}

    			if (dirty & /*subcategory*/ 4) {
    				attr_dev(img, "alt", /*subcategory*/ ctx[2]);
    			}

    			if (dirty & /*id*/ 1) {
    				attr_dev(div2, "id", /*id*/ ctx[0]);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$6.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$6($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("QuotationCard", slots, []);
    	let { id = null } = $$props;
    	let { category = null } = $$props;
    	let { subcategory = null } = $$props;
    	let { url = null } = $$props;
    	const writable_props = ["id", "category", "subcategory", "url"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<QuotationCard> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("id" in $$props) $$invalidate(0, id = $$props.id);
    		if ("category" in $$props) $$invalidate(1, category = $$props.category);
    		if ("subcategory" in $$props) $$invalidate(2, subcategory = $$props.subcategory);
    		if ("url" in $$props) $$invalidate(3, url = $$props.url);
    	};

    	$$self.$capture_state = () => ({ id, category, subcategory, url });

    	$$self.$inject_state = $$props => {
    		if ("id" in $$props) $$invalidate(0, id = $$props.id);
    		if ("category" in $$props) $$invalidate(1, category = $$props.category);
    		if ("subcategory" in $$props) $$invalidate(2, subcategory = $$props.subcategory);
    		if ("url" in $$props) $$invalidate(3, url = $$props.url);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [id, category, subcategory, url];
    }

    class QuotationCard extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$6, create_fragment$6, safe_not_equal, {
    			id: 0,
    			category: 1,
    			subcategory: 2,
    			url: 3
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "QuotationCard",
    			options,
    			id: create_fragment$6.name
    		});
    	}

    	get id() {
    		throw new Error("<QuotationCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set id(value) {
    		throw new Error("<QuotationCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get category() {
    		throw new Error("<QuotationCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set category(value) {
    		throw new Error("<QuotationCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get subcategory() {
    		throw new Error("<QuotationCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set subcategory(value) {
    		throw new Error("<QuotationCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get url() {
    		throw new Error("<QuotationCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set url(value) {
    		throw new Error("<QuotationCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\UI\QuotationGrid.svelte generated by Svelte v3.38.2 */
    const file$4 = "src\\UI\\QuotationGrid.svelte";

    function get_each_context$1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[1] = list[i];
    	return child_ctx;
    }

    // (12:8) {#each quotationCards as quotationCard (quotationCard.id)}
    function create_each_block$1(key_1, ctx) {
    	let first;
    	let eventcard;
    	let current;
    	const eventcard_spread_levels = [/*quotationCard*/ ctx[1]];
    	let eventcard_props = {};

    	for (let i = 0; i < eventcard_spread_levels.length; i += 1) {
    		eventcard_props = assign(eventcard_props, eventcard_spread_levels[i]);
    	}

    	eventcard = new QuotationCard({ props: eventcard_props, $$inline: true });

    	const block = {
    		key: key_1,
    		first: null,
    		c: function create() {
    			first = empty();
    			create_component(eventcard.$$.fragment);
    			this.first = first;
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, first, anchor);
    			mount_component(eventcard, target, anchor);
    			current = true;
    		},
    		p: function update(new_ctx, dirty) {
    			ctx = new_ctx;

    			const eventcard_changes = (dirty & /*quotationCards*/ 1)
    			? get_spread_update(eventcard_spread_levels, [get_spread_object(/*quotationCard*/ ctx[1])])
    			: {};

    			eventcard.$set(eventcard_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(eventcard.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(eventcard.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(first);
    			destroy_component(eventcard, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$1.name,
    		type: "each",
    		source: "(12:8) {#each quotationCards as quotationCard (quotationCard.id)}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$5(ctx) {
    	let div1;
    	let div0;
    	let each_blocks = [];
    	let each_1_lookup = new Map();
    	let current;
    	let each_value = /*quotationCards*/ ctx[0];
    	validate_each_argument(each_value);
    	const get_key = ctx => /*quotationCard*/ ctx[1].id;
    	validate_each_keys(ctx, each_value, get_each_context$1, get_key);

    	for (let i = 0; i < each_value.length; i += 1) {
    		let child_ctx = get_each_context$1(ctx, each_value, i);
    		let key = get_key(child_ctx);
    		each_1_lookup.set(key, each_blocks[i] = create_each_block$1(key, child_ctx));
    	}

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			div0 = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(div0, "class", "row row-cols-1 row-cols-md-4 g-3");
    			add_location(div0, file$4, 10, 4, 255);
    			attr_dev(div1, "class", "container my-4");
    			add_location(div1, file$4, 9, 0, 221);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, div0);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div0, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*quotationCards*/ 1) {
    				each_value = /*quotationCards*/ ctx[0];
    				validate_each_argument(each_value);
    				group_outros();
    				validate_each_keys(ctx, each_value, get_each_context$1, get_key);
    				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div0, outro_and_destroy_block, create_each_block$1, null, get_each_context$1);
    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].d();
    			}
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$5.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$5($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("QuotationGrid", slots, []);
    	let { quotationCards = [] } = $$props;
    	const writable_props = ["quotationCards"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<QuotationGrid> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("quotationCards" in $$props) $$invalidate(0, quotationCards = $$props.quotationCards);
    	};

    	$$self.$capture_state = () => ({
    		QuotationCard,
    		EventCard: QuotationCard,
    		Carousel,
    		quotationCards
    	});

    	$$self.$inject_state = $$props => {
    		if ("quotationCards" in $$props) $$invalidate(0, quotationCards = $$props.quotationCards);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [quotationCards];
    }

    class QuotationGrid extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$5, create_fragment$5, safe_not_equal, { quotationCards: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "QuotationGrid",
    			options,
    			id: create_fragment$5.name
    		});
    	}

    	get quotationCards() {
    		throw new Error("<QuotationGrid>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set quotationCards(value) {
    		throw new Error("<QuotationGrid>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\UI\BenefitBlockquote.svelte generated by Svelte v3.38.2 */

    const file$3 = "src\\UI\\BenefitBlockquote.svelte";

    function create_fragment$4(ctx) {
    	let figure;
    	let img;
    	let img_src_value;
    	let t0;
    	let blockquote;
    	let p;
    	let t1;
    	let t2;
    	let figcaption;
    	let t3;

    	const block = {
    		c: function create() {
    			figure = element("figure");
    			img = element("img");
    			t0 = space();
    			blockquote = element("blockquote");
    			p = element("p");
    			t1 = text(/*title*/ ctx[2]);
    			t2 = space();
    			figcaption = element("figcaption");
    			t3 = text(/*text*/ ctx[3]);
    			if (img.src !== (img_src_value = /*icon*/ ctx[1])) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", /*title*/ ctx[2]);
    			attr_dev(img, "class", "mb-3");
    			attr_dev(img, "width", "50");
    			add_location(img, file$3, 8, 4, 186);
    			attr_dev(p, "class", "mb-0");
    			add_location(p, file$3, 11, 8, 303);
    			attr_dev(blockquote, "class", "blockquote text-center");
    			add_location(blockquote, file$3, 10, 4, 250);
    			attr_dev(figcaption, "class", "blockquote-footer text-center svelte-wjs4ab");
    			add_location(figcaption, file$3, 14, 4, 357);
    			attr_dev(figure, "id", /*id*/ ctx[0]);
    			attr_dev(figure, "class", "text-center");
    			add_location(figure, file$3, 7, 0, 147);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, figure, anchor);
    			append_dev(figure, img);
    			append_dev(figure, t0);
    			append_dev(figure, blockquote);
    			append_dev(blockquote, p);
    			append_dev(p, t1);
    			append_dev(figure, t2);
    			append_dev(figure, figcaption);
    			append_dev(figcaption, t3);
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*icon*/ 2 && img.src !== (img_src_value = /*icon*/ ctx[1])) {
    				attr_dev(img, "src", img_src_value);
    			}

    			if (dirty & /*title*/ 4) {
    				attr_dev(img, "alt", /*title*/ ctx[2]);
    			}

    			if (dirty & /*title*/ 4) set_data_dev(t1, /*title*/ ctx[2]);
    			if (dirty & /*text*/ 8) set_data_dev(t3, /*text*/ ctx[3]);

    			if (dirty & /*id*/ 1) {
    				attr_dev(figure, "id", /*id*/ ctx[0]);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(figure);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$4.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$4($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("BenefitBlockquote", slots, []);
    	let { id = "" } = $$props;
    	let { icon = "" } = $$props;
    	let { title = "" } = $$props;
    	let { text = "" } = $$props;
    	const writable_props = ["id", "icon", "title", "text"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<BenefitBlockquote> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("id" in $$props) $$invalidate(0, id = $$props.id);
    		if ("icon" in $$props) $$invalidate(1, icon = $$props.icon);
    		if ("title" in $$props) $$invalidate(2, title = $$props.title);
    		if ("text" in $$props) $$invalidate(3, text = $$props.text);
    	};

    	$$self.$capture_state = () => ({ id, icon, title, text });

    	$$self.$inject_state = $$props => {
    		if ("id" in $$props) $$invalidate(0, id = $$props.id);
    		if ("icon" in $$props) $$invalidate(1, icon = $$props.icon);
    		if ("title" in $$props) $$invalidate(2, title = $$props.title);
    		if ("text" in $$props) $$invalidate(3, text = $$props.text);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [id, icon, title, text];
    }

    class BenefitBlockquote extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$4, create_fragment$4, safe_not_equal, { id: 0, icon: 1, title: 2, text: 3 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "BenefitBlockquote",
    			options,
    			id: create_fragment$4.name
    		});
    	}

    	get id() {
    		throw new Error("<BenefitBlockquote>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set id(value) {
    		throw new Error("<BenefitBlockquote>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get icon() {
    		throw new Error("<BenefitBlockquote>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set icon(value) {
    		throw new Error("<BenefitBlockquote>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get title() {
    		throw new Error("<BenefitBlockquote>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set title(value) {
    		throw new Error("<BenefitBlockquote>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get text() {
    		throw new Error("<BenefitBlockquote>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set text(value) {
    		throw new Error("<BenefitBlockquote>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\UI\BenefitsGrid.svelte generated by Svelte v3.38.2 */
    const file$2 = "src\\UI\\BenefitsGrid.svelte";

    function get_each_context(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[1] = list[i];
    	return child_ctx;
    }

    // (10:8) {#each benefits as benefit (benefit.id)}
    function create_each_block(key_1, ctx) {
    	let first;
    	let benefitblockquote;
    	let current;
    	const benefitblockquote_spread_levels = [/*benefit*/ ctx[1]];
    	let benefitblockquote_props = {};

    	for (let i = 0; i < benefitblockquote_spread_levels.length; i += 1) {
    		benefitblockquote_props = assign(benefitblockquote_props, benefitblockquote_spread_levels[i]);
    	}

    	benefitblockquote = new BenefitBlockquote({
    			props: benefitblockquote_props,
    			$$inline: true
    		});

    	const block = {
    		key: key_1,
    		first: null,
    		c: function create() {
    			first = empty();
    			create_component(benefitblockquote.$$.fragment);
    			this.first = first;
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, first, anchor);
    			mount_component(benefitblockquote, target, anchor);
    			current = true;
    		},
    		p: function update(new_ctx, dirty) {
    			ctx = new_ctx;

    			const benefitblockquote_changes = (dirty & /*benefits*/ 1)
    			? get_spread_update(benefitblockquote_spread_levels, [get_spread_object(/*benefit*/ ctx[1])])
    			: {};

    			benefitblockquote.$set(benefitblockquote_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(benefitblockquote.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(benefitblockquote.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(first);
    			destroy_component(benefitblockquote, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block.name,
    		type: "each",
    		source: "(10:8) {#each benefits as benefit (benefit.id)}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$3(ctx) {
    	let div1;
    	let div0;
    	let each_blocks = [];
    	let each_1_lookup = new Map();
    	let current;
    	let each_value = /*benefits*/ ctx[0];
    	validate_each_argument(each_value);
    	const get_key = ctx => /*benefit*/ ctx[1].id;
    	validate_each_keys(ctx, each_value, get_each_context, get_key);

    	for (let i = 0; i < each_value.length; i += 1) {
    		let child_ctx = get_each_context(ctx, each_value, i);
    		let key = get_key(child_ctx);
    		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
    	}

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			div0 = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(div0, "class", "row row-cols-1 row-cols-md-3 g-3");
    			add_location(div0, file$2, 8, 4, 198);
    			attr_dev(div1, "class", "container my-4");
    			add_location(div1, file$2, 7, 0, 164);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, div0);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div0, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*benefits*/ 1) {
    				each_value = /*benefits*/ ctx[0];
    				validate_each_argument(each_value);
    				group_outros();
    				validate_each_keys(ctx, each_value, get_each_context, get_key);
    				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div0, outro_and_destroy_block, create_each_block, null, get_each_context);
    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].d();
    			}
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$3.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$3($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("BenefitsGrid", slots, []);
    	let { benefits = [] } = $$props;
    	const writable_props = ["benefits"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<BenefitsGrid> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("benefits" in $$props) $$invalidate(0, benefits = $$props.benefits);
    	};

    	$$self.$capture_state = () => ({ BenefitBlockquote, Carousel, benefits });

    	$$self.$inject_state = $$props => {
    		if ("benefits" in $$props) $$invalidate(0, benefits = $$props.benefits);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [benefits];
    }

    class BenefitsGrid extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$3, create_fragment$3, safe_not_equal, { benefits: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "BenefitsGrid",
    			options,
    			id: create_fragment$3.name
    		});
    	}

    	get benefits() {
    		throw new Error("<BenefitsGrid>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set benefits(value) {
    		throw new Error("<BenefitsGrid>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\UI\Section.svelte generated by Svelte v3.38.2 */

    const file$1 = "src\\UI\\Section.svelte";

    function create_fragment$2(ctx) {
    	let div;
    	let h3;
    	let b0;
    	let t0;
    	let span;
    	let t1;
    	let t2;
    	let b1;

    	const block = {
    		c: function create() {
    			div = element("div");
    			h3 = element("h3");
    			b0 = element("b");
    			t0 = space();
    			span = element("span");
    			t1 = text(/*name*/ ctx[0]);
    			t2 = space();
    			b1 = element("b");
    			attr_dev(b0, "class", "svelte-iy1gfg");
    			add_location(b0, file$1, 6, 8, 165);
    			attr_dev(span, "class", "section-title-main svelte-iy1gfg");
    			add_location(span, file$1, 7, 12, 186);
    			attr_dev(b1, "class", "svelte-iy1gfg");
    			add_location(b1, file$1, 8, 8, 242);
    			attr_dev(h3, "class", "section-title section-title-center svelte-iy1gfg");
    			add_location(h3, file$1, 5, 4, 108);
    			attr_dev(div, "class", "container section-title-container my-5 svelte-iy1gfg");
    			add_location(div, file$1, 4, 0, 50);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, h3);
    			append_dev(h3, b0);
    			append_dev(h3, t0);
    			append_dev(h3, span);
    			append_dev(span, t1);
    			append_dev(h3, t2);
    			append_dev(h3, b1);
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*name*/ 1) set_data_dev(t1, /*name*/ ctx[0]);
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$2($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Section", slots, []);
    	let { name = "" } = $$props;
    	const writable_props = ["name"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Section> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("name" in $$props) $$invalidate(0, name = $$props.name);
    	};

    	$$self.$capture_state = () => ({ name });

    	$$self.$inject_state = $$props => {
    		if ("name" in $$props) $$invalidate(0, name = $$props.name);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [name];
    }

    class Section extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$2, create_fragment$2, safe_not_equal, { name: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Section",
    			options,
    			id: create_fragment$2.name
    		});
    	}

    	get name() {
    		throw new Error("<Section>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set name(value) {
    		throw new Error("<Section>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Pages\Home.svelte generated by Svelte v3.38.2 */
    const file = "src\\Pages\\Home.svelte";

    // (113:0) <Template>
    function create_default_slot(ctx) {
    	let div;
    	let carousel;
    	let t0;
    	let section0;
    	let t1;
    	let quotationgrid;
    	let t2;
    	let section1;
    	let t3;
    	let eventsgrid;
    	let t4;
    	let section2;
    	let t5;
    	let benefitsgrid;
    	let current;
    	carousel = new Carousel({ $$inline: true });

    	section0 = new Section({
    			props: { name: "BRAZALETES POR COTIZACIÓN" },
    			$$inline: true
    		});

    	quotationgrid = new QuotationGrid({
    			props: {
    				quotationCards: /*quotationCards*/ ctx[1]
    			},
    			$$inline: true
    		});

    	section1 = new Section({
    			props: { name: "BRAZALETES PARA CADA OCASIÓN" },
    			$$inline: true
    		});

    	eventsgrid = new EventsGrid({
    			props: { eventCards: /*eventCards*/ ctx[0] },
    			$$inline: true
    		});

    	section2 = new Section({
    			props: { name: "NUESTRAS VENTAJAS" },
    			$$inline: true
    		});

    	benefitsgrid = new BenefitsGrid({
    			props: { benefits: /*benefits*/ ctx[2] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div = element("div");
    			create_component(carousel.$$.fragment);
    			t0 = space();
    			create_component(section0.$$.fragment);
    			t1 = space();
    			create_component(quotationgrid.$$.fragment);
    			t2 = space();
    			create_component(section1.$$.fragment);
    			t3 = space();
    			create_component(eventsgrid.$$.fragment);
    			t4 = space();
    			create_component(section2.$$.fragment);
    			t5 = space();
    			create_component(benefitsgrid.$$.fragment);
    			add_location(div, file, 113, 4, 5175);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			mount_component(carousel, div, null);
    			append_dev(div, t0);
    			mount_component(section0, div, null);
    			append_dev(div, t1);
    			mount_component(quotationgrid, div, null);
    			append_dev(div, t2);
    			mount_component(section1, div, null);
    			append_dev(div, t3);
    			mount_component(eventsgrid, div, null);
    			append_dev(div, t4);
    			mount_component(section2, div, null);
    			append_dev(div, t5);
    			mount_component(benefitsgrid, div, null);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(carousel.$$.fragment, local);
    			transition_in(section0.$$.fragment, local);
    			transition_in(quotationgrid.$$.fragment, local);
    			transition_in(section1.$$.fragment, local);
    			transition_in(eventsgrid.$$.fragment, local);
    			transition_in(section2.$$.fragment, local);
    			transition_in(benefitsgrid.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(carousel.$$.fragment, local);
    			transition_out(section0.$$.fragment, local);
    			transition_out(quotationgrid.$$.fragment, local);
    			transition_out(section1.$$.fragment, local);
    			transition_out(eventsgrid.$$.fragment, local);
    			transition_out(section2.$$.fragment, local);
    			transition_out(benefitsgrid.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_component(carousel);
    			destroy_component(section0);
    			destroy_component(quotationgrid);
    			destroy_component(section1);
    			destroy_component(eventsgrid);
    			destroy_component(section2);
    			destroy_component(benefitsgrid);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot.name,
    		type: "slot",
    		source: "(113:0) <Template>",
    		ctx
    	});

    	return block;
    }

    function create_fragment$1(ctx) {
    	let template;
    	let current;

    	template = new Template({
    			props: {
    				$$slots: { default: [create_default_slot] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(template.$$.fragment);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(template, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const template_changes = {};

    			if (dirty & /*$$scope*/ 8) {
    				template_changes.$$scope = { dirty, ctx };
    			}

    			template.$set(template_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(template.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(template.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(template, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Home", slots, []);

    	const eventCards = [
    		{
    			id: "5a3f079edff3ca232965258f52272477",
    			title: "Hoteles & Resort",
    			url: "https://www.brazaletesmexico.com/wp-content/uploads/viaje_playa_brazalete.jpg"
    		},
    		{
    			id: "f49e3bf0c0c1cafb64a419e52d3d3c18",
    			title: "Eventos",
    			url: "https://www.brazaletesmexico.com/wp-content/uploads/festival_concert_wristbands.jpg"
    		},
    		{
    			id: "bf55d5cbced1a36cd44b64d1eec88490",
    			title: "Hospitalarios",
    			url: "https://www.brazaletesmexico.com/wp-content/uploads/paciente-con-brazalete.jpg"
    		},
    		{
    			id: "69a1b1cd95e75b7280096929f800b314",
    			title: "Hoteles & Resort",
    			url: "https://www.brazaletesmexico.com/wp-content/uploads/parques-acuaticos-brazaletes-1024x731.jpg"
    		}
    	];

    	const quotationCards = [
    		{
    			id: "1b2e445a75417b67edf363b37362ca680303f80a",
    			category: "SEGURIDAD",
    			subcategory: "Brazaletes de Tyvek",
    			url: "https://www.brazaletesmexico.com/wp-content/uploads/brazaletes-de-tyvek-barcode-de-seguridad.jpg",
    			route: "https://www.brazaletesmexico.com/portfolio-featured-item/brazaletes-de-tyvek/"
    		},
    		{
    			id: "d0d92833a22c744079df9e9e3b0ba6db27cb5ead",
    			category: "SEGURIDAD",
    			subcategory: "Brazaletes de Vinil",
    			url: "https://www.brazaletesmexico.com/wp-content/uploads/VINIL-1-2-1-1.jpg",
    			route: "https://www.brazaletesmexico.com/portfolio-featured-item/brazaletes-de-vinil/"
    		},
    		{
    			id: "ffdeefca6c39c0df010c92155d6118e6124e2db9",
    			category: "SEGURIDAD",
    			subcategory: "Brazaletes Holográficos",
    			url: "https://www.brazaletesmexico.com/wp-content/uploads/brazaletes-en-mexico-de-seguridad-holograficos.jpg",
    			route: "https://www.brazaletesmexico.com/featured-item/brazaletes-holograficos/"
    		},
    		{
    			id: "0cd67fdc9e0819d8fa5708835acc70bbff4e1c53",
    			category: "SEGURIDAD",
    			subcategory: "Brazaletes Hospitalarios",
    			url: "https://www.brazaletesmexico.com/wp-content/uploads/brazaletes-de-vinil-seguridad-hospitalario-e1612977809635.jpg",
    			route: "https://www.brazaletesmexico.com/portfolio-featured-item/brazaletes-hospitalarios/"
    		},
    		{
    			id: "c90414a5195d0234365848421b85f991de10ae23",
    			category: "SEGURIDAD",
    			subcategory: "Brazaletes de Tyvek",
    			url: "https://www.brazaletesmexico.com/wp-content/uploads/Brazaletes-de-silicon-grabado.jpg",
    			route: ""
    		},
    		{
    			id: "d262634e6da1e487a1a3fc976b8fe0a2b0e83ff9",
    			category: "SEGURIDAD",
    			subcategory: "Brazaletes de Tyvek",
    			url: "https://www.brazaletesmexico.com/wp-content/uploads/brazaletes-promocionales-de-tela-bm-200.jpg",
    			route: ""
    		},
    		{
    			id: "d262634e6da1e487a1a3fc976b8fe0a2b0e83ff4",
    			category: "SEGURIDAD",
    			subcategory: "Brazaletes de Tyvek",
    			url: "https://www.brazaletesmexico.com/wp-content/uploads/madera_RFID.jpg",
    			route: ""
    		},
    		{
    			id: "d262634e6da1e487a1a3fc976h8fe0a2b0e83ff9",
    			category: "SEGURIDAD",
    			subcategory: "Brazaletes de Tyvek",
    			url: "https://www.brazaletesmexico.com/wp-content/uploads/tarjetas-impresas-de-pvc.jpg",
    			route: ""
    		}
    	];

    	const benefits = [
    		{
    			id: "d262634e6da1e487a1a3ff976b8fe0a2b0e83ff4",
    			icon: "https://www.brazaletesmexico.com/wp-content/uploads/envios.svg",
    			title: "ENVÍOS INMEDIATOS",
    			text: "Tenemos envíos a todo el país con los mejores tiempos de entrega y monitoreo constante de su pedido."
    		},
    		{
    			id: "d262634e6da1e487a1a3fg976b8fe0a2b0e83ff4",
    			icon: "https://www.brazaletesmexico.com/wp-content/uploads/calidad.svg",
    			title: "EXCELENTE CALIDAD",
    			text: "Estándares de calidad altos para así proporcionar un producto seguro y distintivo para el control y promoción de tus eventos."
    		},
    		{
    			id: "d262634e6da1e487a1a3fk976b8fe0a2b0e83ff4",
    			icon: "https://www.brazaletesmexico.com/wp-content/uploads/precio.svg",
    			title: "EL MEJOR PRECIO",
    			text: "Nos enfocamos en ofrecer el mejor precio en el mercado basado en la calidad, tiempo de entrega y el servicio que ofrecemos."
    		}
    	];

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Home> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		Template,
    		Carousel,
    		EventsGrid,
    		QuotationGrid,
    		BenefitsGrid,
    		Section,
    		eventCards,
    		quotationCards,
    		benefits
    	});

    	return [eventCards, quotationCards, benefits];
    }

    class Home extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Home",
    			options,
    			id: create_fragment$1.name
    		});
    	}
    }

    /* src\App.svelte generated by Svelte v3.38.2 */

    function create_fragment(ctx) {
    	let home;
    	let current;
    	home = new Home({ $$inline: true });

    	const block = {
    		c: function create() {
    			create_component(home.$$.fragment);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(home, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(home.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(home.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(home, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("App", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Home });
    	return [];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment.name
    		});
    	}
    }

    const app = new App({ target: document.body });

    return app;

}());
//# sourceMappingURL=bundle.js.map
