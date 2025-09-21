"use strict";
(function(module) {
    if (typeof define === 'function' && define.amd) {
        define(['exports'], function(exports)  {
            module(exports);
        });
    } else if (typeof exports === 'object' && exports !== null && typeof exports.nodeName !== 'string') {
        module(exports);
    } else {
        module(typeof self !== 'undefined' ? self : this);
}
}(function($rt_exports) {
let $rt_seed = 2463534242,
$rt_nextId = () => {
    let x = $rt_seed;
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;
    $rt_seed = x;
    return x;
},
$rt_wrapFunction0 = f => function() {
    return f(this);
},
$rt_wrapFunction1 = f => function(p1) {
    return f(this, p1);
},
$rt_wrapFunction2 = f => function(p1, p2) {
    return f(this, p1, p2);
},
$rt_wrapFunction3 = f => function(p1, p2, p3) {
    return f(this, p1, p2, p3, p3);
},
$rt_mainStarter = f => (args, callback) => {
    if (!args) {
        args = [];
    }
    let javaArgs = $rt_createArray($rt_objcls(), args.length);
    for (let i = 0;i < args.length;++i) {
        javaArgs.data[i] = $rt_str(args[i]);
    }
    $rt_startThread(() => {
        f.call(null, javaArgs);
    }, callback);
},
$rt_eraseClinit = target => target.$clinit = () => {
},
$dbg_class = obj => {
    let cls = obj.constructor;
    let arrayDegree = 0;
    while (cls.$meta && cls.$meta.item) {
        ++arrayDegree;
        cls = cls.$meta.item;
    }
    let clsName = "";
    if (cls.$meta.primitive) {
        clsName = cls.$meta.name;
    } else {
        clsName = cls.$meta ? cls.$meta.name || "a/" + cls.name : "@" + cls.name;
    }
    while (arrayDegree-- > 0) {
        clsName += "[]";
    }
    return clsName;
},
$rt_classWithoutFields = superclass => {
    if (superclass === 0) {
        return function() {
        };
    }
    if (superclass === void 0) {
        superclass = $rt_objcls();
    }
    return function() {
        superclass.call(this);
    };
},
$rt_cls = cls => jl_Class_getClass(cls),
$rt_objcls = () => jl_Object,
$rt_createcls = () => {
    return { $array : null, classObject : null, $meta : { supertypes : [], superclass : null } };
},
$rt_createPrimitiveCls = (name, binaryName) => {
    let cls = $rt_createcls();
    cls.$meta.primitive = true;
    cls.$meta.name = name;
    cls.$meta.binaryName = binaryName;
    cls.$meta.enum = false;
    cls.$meta.item = null;
    cls.$meta.simpleName = null;
    cls.$meta.declaringClass = null;
    cls.$meta.enclosingClass = null;
    return cls;
},
$rt_charcls = $rt_createPrimitiveCls("char", "C"),
$rt_intcls = $rt_createPrimitiveCls("int", "I");
if (typeof BigInt !== 'function') {
} else if (typeof BigInt64Array !== 'function') {
} else {
}
let $rt_imul = Math.imul || function(a, b) {
    let ah = a >>> 16 & 0xFFFF;
    let al = a & 0xFFFF;
    let bh = b >>> 16 & 0xFFFF;
    let bl = b & 0xFFFF;
    return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
},
$rt_udiv = (a, b) => (a >>> 0) / (b >>> 0) >>> 0,
$rt_umod = (a, b) => (a >>> 0) % (b >>> 0) >>> 0,
$rt_ucmp = (a, b) => {
    a >>>= 0;
    b >>>= 0;
    return a < b ?  -1 : a > b ? 1 : 0;
};
function Long(lo, hi) {
    this.lo = lo | 0;
    this.hi = hi | 0;
}
if (typeof BigInt !== "function") {
} else {
}
if (typeof BigInt !== 'function') {
    function LongInt(lo, hi, sup) {
        this.lo = lo;
        this.hi = hi;
        this.sup = sup;
    }
} else {
}
let $rt_createArray = (cls, sz) => {
    let data = new Array(sz);
    data.fill(null);
    return new ($rt_arraycls(cls))(data);
},
$rt_wrapArray = (cls, data) => new ($rt_arraycls(cls))(data);
if (typeof BigInt64Array !== 'function') {
} else {
}
let $rt_createCharArray = sz => new $rt_charArrayCls(new Uint16Array(sz)),
$rt_createCharArrayFromData = data => {
    let buffer = new Uint16Array(data.length);
    buffer.set(data);
    return new $rt_charArrayCls(buffer);
},
$rt_arraycls = cls => {
    let result = cls.$array;
    if (result === null) {
        function JavaArray(data) {
            ($rt_objcls()).call(this);
            this.data = data;
        }
        JavaArray.prototype = Object.create(($rt_objcls()).prototype);
        JavaArray.prototype.type = cls;
        JavaArray.prototype.constructor = JavaArray;
        JavaArray.prototype.toString = function() {
            let str = "[";
            for (let i = 0;i < this.data.length;++i) {
                if (i > 0) {
                    str += ", ";
                }
                str += this.data[i].toString();
            }
            str += "]";
            return str;
        };
        JavaArray.prototype.$clone = function() {
            let dataCopy;
            if ('slice' in this.data) {
                dataCopy = this.data.slice();
            } else {
                dataCopy = new this.data.constructor(this.data.length);
                for (let i = 0;i < dataCopy.length;++i) {
                    dataCopy[i] = this.data[i];
                }
            }
            return new ($rt_arraycls(this.type))(dataCopy);
        };
        let name = "[" + cls.$meta.binaryName;
        JavaArray.$meta = { item : cls, supertypes : [$rt_objcls()], primitive : false, superclass : $rt_objcls(), name : name, binaryName : name, enum : false, simpleName : null, declaringClass : null, enclosingClass : null };
        JavaArray.classObject = null;
        JavaArray.$array = null;
        result = JavaArray;
        cls.$array = JavaArray;
    }
    return result;
},
$rt_stringPool_instance,
$rt_stringPool = strings => {
    $rt_stringClassInit();
    $rt_stringPool_instance = new Array(strings.length);
    for (let i = 0;i < strings.length;++i) {
        $rt_stringPool_instance[i] = $rt_intern($rt_str(strings[i]));
    }
},
$rt_s = index => $rt_stringPool_instance[index],
$rt_charArrayToString = (array, offset, count) => {
    let result = "";
    let limit = offset + count;
    for (let i = offset;i < limit;i = i + 1024 | 0) {
        let next = Math.min(limit, i + 1024 | 0);
        result += String.fromCharCode.apply(null, array.subarray(i, next));
    }
    return result;
},
$rt_str = str => str === null ? null : jl_String__init_4(str),
$rt_ustr = str => str === null ? null : str.$nativeString,
$rt_stringClassInit = () => jl_String_$callClinit(),
$rt_intern;
{
    $rt_intern = str => str;
}
let $rt_throw = ex => {
    throw $rt_exception(ex);
},
$rt_javaExceptionProp = Symbol("javaException"),
$rt_exception = ex => {
    let err = ex.$jsException;
    if (!err) {
        let javaCause = $rt_throwableCause(ex);
        let jsCause = javaCause !== null ? javaCause.$jsException : void 0;
        let cause = typeof jsCause === "object" ? { cause : jsCause } : void 0;
        err = new JavaError("Java exception thrown", cause);
        if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(err);
        }
        err[$rt_javaExceptionProp] = ex;
        ex.$jsException = err;
        $rt_fillStack(err, ex);
    }
    return err;
},
$rt_fillStack = (err, ex) => {
    if (typeof $rt_decodeStack === "function" && err.stack) {
        let stack = $rt_decodeStack(err.stack);
        let javaStack = $rt_createArray($rt_stecls(), stack.length);
        let elem;
        let noStack = false;
        for (let i = 0;i < stack.length;++i) {
            let element = stack[i];
            elem = $rt_createStackElement($rt_str(element.className), $rt_str(element.methodName), $rt_str(element.fileName), element.lineNumber);
            if (elem == null) {
                noStack = true;
                break;
            }
            javaStack.data[i] = elem;
        }
        if (!noStack) {
            $rt_setStack(ex, javaStack);
        }
    }
},
JavaError;
if (typeof Reflect === 'object') {
    let defaultMessage = Symbol("defaultMessage");
    JavaError = function JavaError(message, cause) {
        let self = Reflect.construct(Error, [void 0, cause], JavaError);
        Object.setPrototypeOf(self, JavaError.prototype);
        self[defaultMessage] = message;
        return self;
    }
    ;
    JavaError.prototype = Object.create(Error.prototype, { constructor : { configurable : true, writable : true, value : JavaError }, message : { get() {
        try {
            let javaException = this[$rt_javaExceptionProp];
            if (typeof javaException === 'object') {
                let javaMessage = $rt_throwableMessage(javaException);
                if (typeof javaMessage === "object") {
                    return javaMessage !== null ? javaMessage.toString() : null;
                }
            }
            return this[defaultMessage];
        } catch (e){
            return "Exception occurred trying to extract Java exception message: " + e;
        }
    } } });
} else {
    JavaError = Error;
}
let $rt_javaException = e => e instanceof Error && typeof e[$rt_javaExceptionProp] === 'object' ? e[$rt_javaExceptionProp] : null,
$rt_throwableMessage = t => jl_Throwable_getMessage(t),
$rt_throwableCause = t => jl_Throwable_getCause(t),
$rt_stecls = () => jl_StackTraceElement,
$rt_createStackElement = (className, methodName, fileName, lineNumber) => {
    {
        return null;
    }
},
$rt_setStack = (e, stack) => {
},
$rt_packageData = null,
$rt_packages = data => {
    let i = 0;
    let packages = new Array(data.length);
    for (let j = 0;j < data.length;++j) {
        let prefixIndex = data[i++];
        let prefix = prefixIndex >= 0 ? packages[prefixIndex] : "";
        packages[j] = prefix + data[i++] + ".";
    }
    $rt_packageData = packages;
},
$rt_metadata = data => {
    let packages = $rt_packageData;
    let i = 0;
    while (i < data.length) {
        let cls = data[i++];
        cls.$meta = {  };
        let m = cls.$meta;
        let className = data[i++];
        m.name = className !== 0 ? className : null;
        if (m.name !== null) {
            let packageIndex = data[i++];
            if (packageIndex >= 0) {
                m.name = packages[packageIndex] + m.name;
            }
        }
        m.binaryName = "L" + m.name + ";";
        let superclass = data[i++];
        m.superclass = superclass !== 0 ? superclass : null;
        m.supertypes = data[i++];
        if (m.superclass) {
            m.supertypes.push(m.superclass);
            cls.prototype = Object.create(m.superclass.prototype);
        } else {
            cls.prototype = {  };
        }
        let flags = data[i++];
        m.enum = (flags & 8) !== 0;
        m.flags = flags;
        m.primitive = false;
        m.item = null;
        cls.prototype.constructor = cls;
        cls.classObject = null;
        m.accessLevel = data[i++];
        let innerClassInfo = data[i++];
        if (innerClassInfo === 0) {
            m.simpleName = null;
            m.declaringClass = null;
            m.enclosingClass = null;
        } else {
            let enclosingClass = innerClassInfo[0];
            m.enclosingClass = enclosingClass !== 0 ? enclosingClass : null;
            let declaringClass = innerClassInfo[1];
            m.declaringClass = declaringClass !== 0 ? declaringClass : null;
            let simpleName = innerClassInfo[2];
            m.simpleName = simpleName !== 0 ? simpleName : null;
        }
        let clinit = data[i++];
        cls.$clinit = clinit !== 0 ? clinit : function() {
        };
        let virtualMethods = data[i++];
        if (virtualMethods !== 0) {
            for (let j = 0;j < virtualMethods.length;j += 2) {
                let name = virtualMethods[j];
                let func = virtualMethods[j + 1];
                if (typeof name === 'string') {
                    name = [name];
                }
                for (let k = 0;k < name.length;++k) {
                    cls.prototype[name[k]] = func;
                }
            }
        }
        cls.$array = null;
    }
},
$rt_startThread = (runner, callback) => {
    let result;
    try {
        result = runner();
    } catch (e){
        result = e;
    }
    if (typeof callback !== 'undefined') {
        callback(result);
    } else if (result instanceof Error) {
        throw result;
    }
};
function jl_Object() {
    this.$id$ = 0;
}
let jl_Object__init_ = $this => {
    return;
},
jl_Object__init_0 = () => {
    let var_0 = new jl_Object();
    jl_Object__init_(var_0);
    return var_0;
},
jl_Object_getClass = $this => {
    return jl_Class_getClass($this.constructor);
},
jl_Object_hashCode = $this => {
    return jl_Object_identity($this);
},
jl_Object_equals = ($this, $other) => {
    return $this !== $other ? 0 : 1;
},
jl_Object_toString = $this => {
    let var$1, var$2, var$3;
    var$1 = (jl_Object_getClass($this)).$getName();
    var$2 = jl_Integer_toHexString(jl_Object_identity($this));
    var$3 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$3, var$1), 64), var$2);
    return jl_StringBuilder_toString(var$3);
},
jl_Object_identity = $this => {
    let $platformThis;
    $platformThis = $this;
    if (!$platformThis.$id$)
        $platformThis.$id$ = $rt_nextId();
    return $this.$id$;
};
function jl_Throwable() {
    let a = this; jl_Object.call(a);
    a.$message = null;
    a.$cause = null;
    a.$suppressionEnabled = 0;
    a.$writableStackTrace = 0;
}
let jl_Throwable__init_0 = $this => {
    $this.$suppressionEnabled = 1;
    $this.$writableStackTrace = 1;
    $this.$fillInStackTrace();
},
jl_Throwable__init_1 = () => {
    let var_0 = new jl_Throwable();
    jl_Throwable__init_0(var_0);
    return var_0;
},
jl_Throwable__init_ = ($this, $message) => {
    $this.$suppressionEnabled = 1;
    $this.$writableStackTrace = 1;
    $this.$fillInStackTrace();
    $this.$message = $message;
},
jl_Throwable__init_2 = var_0 => {
    let var_1 = new jl_Throwable();
    jl_Throwable__init_(var_1, var_0);
    return var_1;
},
jl_Throwable_fillInStackTrace = $this => {
    return $this;
},
jl_Throwable_getMessage = $this => {
    return $this.$message;
},
jl_Throwable_getCause = $this => {
    return $this.$cause === $this ? null : $this.$cause;
},
jl_Exception = $rt_classWithoutFields(jl_Throwable),
jl_Exception__init_0 = $this => {
    jl_Throwable__init_0($this);
},
jl_Exception__init_1 = () => {
    let var_0 = new jl_Exception();
    jl_Exception__init_0(var_0);
    return var_0;
},
jl_Exception__init_ = ($this, $message) => {
    jl_Throwable__init_($this, $message);
},
jl_Exception__init_2 = var_0 => {
    let var_1 = new jl_Exception();
    jl_Exception__init_(var_1, var_0);
    return var_1;
},
jl_RuntimeException = $rt_classWithoutFields(jl_Exception),
jl_RuntimeException__init_ = $this => {
    jl_Exception__init_0($this);
},
jl_RuntimeException__init_1 = () => {
    let var_0 = new jl_RuntimeException();
    jl_RuntimeException__init_(var_0);
    return var_0;
},
jl_RuntimeException__init_0 = ($this, $message) => {
    jl_Exception__init_($this, $message);
},
jl_RuntimeException__init_2 = var_0 => {
    let var_1 = new jl_RuntimeException();
    jl_RuntimeException__init_0(var_1, var_0);
    return var_1;
},
jl_IndexOutOfBoundsException = $rt_classWithoutFields(jl_RuntimeException),
jl_IndexOutOfBoundsException__init_ = $this => {
    jl_RuntimeException__init_($this);
},
jl_IndexOutOfBoundsException__init_0 = () => {
    let var_0 = new jl_IndexOutOfBoundsException();
    jl_IndexOutOfBoundsException__init_(var_0);
    return var_0;
},
ju_Arrays = $rt_classWithoutFields(),
ju_Arrays_copyOf = ($array, $length) => {
    let var$3, $result, $sz, $i;
    var$3 = $array.data;
    $result = $rt_createCharArray($length);
    $sz = jl_Math_min($length, var$3.length);
    $i = 0;
    while ($i < $sz) {
        $result.data[$i] = var$3[$i];
        $i = $i + 1 | 0;
    }
    return $result;
};
function ju_HashMap$AbstractMapIterator() {
    let a = this; jl_Object.call(a);
    a.$position = 0;
    a.$expectedModCount = 0;
    a.$futureEntry = null;
    a.$currentEntry = null;
    a.$prevEntry = null;
    a.$associatedMap = null;
}
let ju_HashMap$AbstractMapIterator__init_ = ($this, $hm) => {
    jl_Object__init_($this);
    $this.$associatedMap = $hm;
    $this.$expectedModCount = $hm.$modCount;
    $this.$futureEntry = null;
},
ju_HashMap$AbstractMapIterator__init_0 = var_0 => {
    let var_1 = new ju_HashMap$AbstractMapIterator();
    ju_HashMap$AbstractMapIterator__init_(var_1, var_0);
    return var_1;
},
ju_HashMap$AbstractMapIterator_hasNext = $this => {
    if ($this.$futureEntry !== null)
        return 1;
    while ($this.$position < $this.$associatedMap.$elementData.data.length) {
        if ($this.$associatedMap.$elementData.data[$this.$position] !== null)
            return 1;
        $this.$position = $this.$position + 1 | 0;
    }
    return 0;
},
ju_HashMap$AbstractMapIterator_checkConcurrentMod = $this => {
    if ($this.$expectedModCount == $this.$associatedMap.$modCount)
        return;
    $rt_throw(ju_ConcurrentModificationException__init_0());
},
ju_HashMap$AbstractMapIterator_makeNext = $this => {
    let var$1, var$2;
    ju_HashMap$AbstractMapIterator_checkConcurrentMod($this);
    if (!$this.$hasNext())
        $rt_throw(ju_NoSuchElementException__init_0());
    if ($this.$futureEntry === null) {
        var$1 = $this.$associatedMap.$elementData.data;
        var$2 = $this.$position;
        $this.$position = var$2 + 1 | 0;
        $this.$currentEntry = var$1[var$2];
        $this.$futureEntry = $this.$currentEntry.$next0;
        $this.$prevEntry = null;
    } else {
        if ($this.$currentEntry !== null)
            $this.$prevEntry = $this.$currentEntry;
        $this.$currentEntry = $this.$futureEntry;
        $this.$futureEntry = $this.$futureEntry.$next0;
    }
};
function cp_WebApp() {
    let a = this; jl_Object.call(a);
    a.$game0 = null;
    a.$renderer = null;
    a.$gameLoopId = 0;
}
let cp_WebApp_$callClinit = () => {
    cp_WebApp_$callClinit = $rt_eraseClinit(cp_WebApp);
    cp_WebApp__clinit_();
},
cp_WebApp__init_ = $this => {
    cp_WebApp_$callClinit();
    jl_Object__init_($this);
},
cp_WebApp__init_0 = () => {
    let var_0 = new cp_WebApp();
    cp_WebApp__init_(var_0);
    return var_0;
},
cp_WebApp_main = $args => {
    cp_WebApp_$callClinit();
    (cp_WebApp__init_0()).$start();
},
cp_WebApp_start = $this => {
    let var$1, var$2, var$3;
    $this.$game0 = cp_PacManGame__init_0();
    $this.$renderer = cp_WebRenderer__init_0($this.$game0);
    var$1 = window.document;
    var$2 = cp_WebApp$1__init_0($this);
    var$1.addEventListener("keydown", otji_JS_function(var$2, "handleEvent"));
    var$3 = $this.$renderer.$getCanvas();
    var$2 = 0;
    var$3.tabIndex = var$2;
    ($this.$renderer.$getCanvas()).focus();
    cp_WebApp_startGameLoop($this);
    cp_WebApp_addInstructions($this);
},
cp_WebApp_startGameLoop = $this => {
    let var$1;
    window;
    var$1 = cp_WebApp$2__init_0($this);
    $this.$gameLoopId = setInterval(otji_JS_function(var$1, "onTimer"), 50);
},
cp_WebApp_addInstructions = $this => {
    let $document, $div, $title, var$4, $instructions, var$6, $techNote;
    $document = window.document;
    $div = otj_JSObject_cast$static($document.createElement("div"));
    $div.style.setProperty("text-align", "center");
    $div.style.setProperty("color", "white");
    $div.style.setProperty("font-family", "Arial");
    $div.style.setProperty("margin", "20px");
    $title = otj_JSObject_cast$static($document.createElement("h1"));
    var$4 = "Java Pac-Man Game";
    $title.textContent = var$4;
    $div.appendChild($title);
    $instructions = otj_JSObject_cast$static($document.createElement("p"));
    var$6 = "Use arrow keys to move. Press any key to restart when game over.";
    $instructions.textContent = var$6;
    $div.appendChild($instructions);
    $techNote = otj_JSObject_cast$static($document.createElement("p"));
    var$6 = "Built with Java, compiled to WebAssembly using TeaVM";
    $techNote.textContent = var$6;
    $techNote.style.setProperty("font-size", "12px");
    $div.appendChild($techNote);
    $document.body.appendChild($div);
},
cp_WebApp_access$000 = $x0 => {
    cp_WebApp_$callClinit();
    return $x0.$game0;
},
cp_WebApp_access$100 = $x0 => {
    cp_WebApp_$callClinit();
    return $x0.$renderer;
},
cp_WebApp__clinit_ = () => {
    return;
},
jur_RandomGenerator = $rt_classWithoutFields(0),
ji_Serializable = $rt_classWithoutFields(0),
ju_Random = $rt_classWithoutFields(),
ju_Random__init_ = $this => {
    jl_Object__init_($this);
},
ju_Random__init_0 = () => {
    let var_0 = new ju_Random();
    ju_Random__init_(var_0);
    return var_0;
},
ju_Random_nextInt = ($this, $n) => {
    if ($n <= 0)
        $rt_throw(jl_IllegalArgumentException__init_0());
    return $this.$nextDouble() * $n | 0;
},
ju_Random_nextDouble = $this => {
    return jl_Math_random();
},
jl_Number = $rt_classWithoutFields(),
jl_Comparable = $rt_classWithoutFields(0),
jl_Integer = $rt_classWithoutFields(jl_Number),
jl_Integer_TYPE = null,
jl_Integer_$callClinit = () => {
    jl_Integer_$callClinit = $rt_eraseClinit(jl_Integer);
    jl_Integer__clinit_();
},
jl_Integer_toHexString = $i => {
    jl_Integer_$callClinit();
    return otci_IntegerUtil_toUnsignedLogRadixString($i, 4);
},
jl_Integer_numberOfLeadingZeros = $i => {
    let $n, var$3, var$4;
    jl_Integer_$callClinit();
    if (!$i)
        return 32;
    $n = 0;
    var$3 = $i >>> 16 | 0;
    if (var$3)
        $n = 16;
    else
        var$3 = $i;
    var$4 = var$3 >>> 8 | 0;
    if (!var$4)
        var$4 = var$3;
    else
        $n = $n | 8;
    var$3 = var$4 >>> 4 | 0;
    if (!var$3)
        var$3 = var$4;
    else
        $n = $n | 4;
    var$4 = var$3 >>> 2 | 0;
    if (!var$4)
        var$4 = var$3;
    else
        $n = $n | 2;
    if (var$4 >>> 1 | 0)
        $n = $n | 1;
    return (32 - $n | 0) - 1 | 0;
},
jl_Integer__clinit_ = () => {
    jl_Integer_TYPE = $rt_cls($rt_intcls);
},
jl_Iterable = $rt_classWithoutFields(0),
ju_Collection = $rt_classWithoutFields(0),
ju_AbstractCollection = $rt_classWithoutFields(),
ju_AbstractCollection__init_ = $this => {
    jl_Object__init_($this);
},
jl_Character = $rt_classWithoutFields(),
jl_Character_TYPE = null,
jl_Character_characterCache = null,
jl_Character_$callClinit = () => {
    jl_Character_$callClinit = $rt_eraseClinit(jl_Character);
    jl_Character__clinit_();
},
jl_Character_forDigit = ($digit, $radix) => {
    jl_Character_$callClinit();
    if ($radix >= 2 && $radix <= 36 && $digit >= 0 && $digit < $radix)
        return $digit < 10 ? (48 + $digit | 0) & 65535 : ((97 + $digit | 0) - 10 | 0) & 65535;
    return 0;
},
jl_Character__clinit_ = () => {
    jl_Character_TYPE = $rt_cls($rt_charcls);
    jl_Character_characterCache = $rt_createArray(jl_Character, 128);
},
otci_IntegerUtil = $rt_classWithoutFields(),
otci_IntegerUtil_toUnsignedLogRadixString = ($value, $radixLog2) => {
    let $radix, $mask, $sz, $chars, $pos, $target, var$9, $target_0;
    if (!$value)
        return $rt_s(0);
    $radix = 1 << $radixLog2;
    $mask = $radix - 1 | 0;
    $sz = (((32 - jl_Integer_numberOfLeadingZeros($value) | 0) + $radixLog2 | 0) - 1 | 0) / $radixLog2 | 0;
    $chars = $rt_createCharArray($sz);
    $pos = $rt_imul($sz - 1 | 0, $radixLog2);
    $target = 0;
    while ($pos >= 0) {
        var$9 = $chars.data;
        $target_0 = $target + 1 | 0;
        var$9[$target] = jl_Character_forDigit(($value >>> $pos | 0) & $mask, $radix);
        $pos = $pos - $radixLog2 | 0;
        $target = $target_0;
    }
    return jl_String__init_3($chars);
},
ju_Map = $rt_classWithoutFields(0),
jl_Math = $rt_classWithoutFields(),
jl_Math_random = () => {
    return jl_Math_randomImpl();
},
jl_Math_randomImpl = () => {
    return Math.random();
},
jl_Math_min = ($a, $b) => {
    if ($a < $b)
        $b = $a;
    return $b;
},
jl_Math_max = ($a, $b) => {
    if ($a > $b)
        $b = $a;
    return $b;
},
otjc_JSObjects = $rt_classWithoutFields(),
jl_Cloneable = $rt_classWithoutFields(0),
otji_JS = $rt_classWithoutFields(),
otji_JS_function = (var$1, var$2) => {
    let name = 'jso$functor$' + var$2;
    let result = var$1[name];
    if (typeof result !== 'function') {
        let fn = function() {
            return var$1[var$2].apply(var$1, arguments);
        };
        result = () => fn;
        var$1[name] = result;
    }
    return result();
},
otj_JSObject = $rt_classWithoutFields(0),
otj_JSObject_cast$static = var$1 => {
    return var$1;
},
otjc_JSFinalizationRegistryConsumer = $rt_classWithoutFields(0);
let otji_JSWrapper$_clinit_$lambda$_33_0 = $rt_classWithoutFields(),
otji_JSWrapper$_clinit_$lambda$_33_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
otji_JSWrapper$_clinit_$lambda$_33_0__init_0 = () => {
    let var_0 = new otji_JSWrapper$_clinit_$lambda$_33_0();
    otji_JSWrapper$_clinit_$lambda$_33_0__init_(var_0);
    return var_0;
},
otji_JSWrapper$_clinit_$lambda$_33_0_accept = (var$0, var$1) => {
    otji_JSWrapper_lambda$static$0(var$1);
},
otji_JSWrapper$_clinit_$lambda$_33_0_accept$exported$0 = (var$0, var$1) => {
    var$0.$accept(otji_JSWrapper_jsToJava(var$1));
},
jl_CharSequence = $rt_classWithoutFields(0);
function cp_WebRenderer() {
    let a = this; jl_Object.call(a);
    a.$game = null;
    a.$context = null;
    a.$canvas = null;
    a.$imageCache = null;
}
let cp_WebRenderer__init_ = ($this, $game) => {
    jl_Object__init_($this);
    $this.$game = $game;
    $this.$imageCache = ju_HashMap__init_2();
    cp_WebRenderer_setupCanvas($this);
    cp_WebRenderer_preloadImages($this);
},
cp_WebRenderer__init_0 = var_0 => {
    let var_1 = new cp_WebRenderer();
    cp_WebRenderer__init_(var_1, var_0);
    return var_1;
},
cp_WebRenderer_setupCanvas = $this => {
    let $document, var$2, var$3;
    $document = window.document;
    $this.$canvas = otj_JSObject_cast$static($document.getElementById("gameCanvas"));
    if ($this.$canvas === null) {
        $this.$canvas = otj_JSObject_cast$static($document.createElement("canvas"));
        $this.$canvas.id = "gameCanvas";
        $document.body.appendChild($this.$canvas);
    }
    var$2 = $this.$canvas;
    var$3 = $this.$game.$getBoardWidth();
    var$2.width = var$3;
    var$2 = $this.$canvas;
    var$3 = $this.$game.$getBoardHeight();
    var$2.height = var$3;
    $this.$context = otj_JSObject_cast$static($this.$canvas.getContext("2d"));
    $this.$canvas.style.setProperty("border", "2px solid #fff");
    $this.$canvas.style.setProperty("background", "#000");
    $this.$canvas.style.setProperty("display", "block");
    $this.$canvas.style.setProperty("margin", "20px auto");
},
cp_WebRenderer_preloadImages = $this => {
    let $imagePaths, var$2, var$3, var$4, $path, $img, var$7;
    $imagePaths = $rt_createArray(jl_String, 10);
    var$2 = $imagePaths.data;
    var$2[0] = $rt_s(1);
    var$2[1] = $rt_s(2);
    var$2[2] = $rt_s(3);
    var$2[3] = $rt_s(4);
    var$2[4] = $rt_s(5);
    var$2[5] = $rt_s(6);
    var$2[6] = $rt_s(7);
    var$2[7] = $rt_s(8);
    var$2[8] = $rt_s(9);
    var$2[9] = $rt_s(10);
    var$3 = var$2.length;
    var$4 = 0;
    while (var$4 < var$3) {
        $path = var$2[var$4];
        $img = otj_JSObject_cast$static(window.document.createElement("img"));
        var$7 = $rt_ustr($path);
        $img.src = var$7;
        $this.$imageCache.$put($path, otji_JSWrapper_wrap($img));
        var$4 = var$4 + 1 | 0;
    }
},
cp_WebRenderer_render = $this => {
    let $pacmanImg, var$2, $ghost, $ghostImg, $wall, $wallImg, $cherry, $cherryImg, var$9, $food, var$11, var$12, var$13, var$14, var$15;
    $this.$context.clearRect(0.0, 0.0, $this.$game.$getBoardWidth(), $this.$game.$getBoardHeight());
    if ($this.$game.$pacman !== null && $this.$game.$pacman.$imagePath !== null) {
        $pacmanImg = otji_JSWrapper_unwrap($this.$imageCache.$get($this.$game.$pacman.$imagePath));
        if ($pacmanImg !== null)
            $this.$context.drawImage($pacmanImg, $this.$game.$pacman.$x, $this.$game.$pacman.$y, $this.$game.$pacman.$width, $this.$game.$pacman.$height);
    }
    a: {
        if ($this.$game.$ghosts !== null) {
            var$2 = $this.$game.$ghosts.$iterator();
            while (true) {
                if (!var$2.$hasNext())
                    break a;
                $ghost = var$2.$next();
                if ($ghost.$imagePath !== null) {
                    $ghostImg = otji_JSWrapper_unwrap($this.$imageCache.$get($ghost.$imagePath));
                    if ($ghostImg !== null)
                        $this.$context.drawImage($ghostImg, $ghost.$x, $ghost.$y, $ghost.$width, $ghost.$height);
                }
            }
        }
    }
    b: {
        if ($this.$game.$walls !== null) {
            var$2 = $this.$game.$walls.$iterator();
            while (true) {
                if (!var$2.$hasNext())
                    break b;
                $wall = var$2.$next();
                if ($wall.$imagePath !== null) {
                    $wallImg = otji_JSWrapper_unwrap($this.$imageCache.$get($wall.$imagePath));
                    if ($wallImg !== null)
                        $this.$context.drawImage($wallImg, $wall.$x, $wall.$y, $wall.$width, $wall.$height);
                }
            }
        }
    }
    c: {
        if ($this.$game.$cherries !== null) {
            var$2 = $this.$game.$cherries.$iterator();
            while (true) {
                if (!var$2.$hasNext())
                    break c;
                $cherry = var$2.$next();
                if ($cherry.$imagePath !== null) {
                    $cherryImg = otji_JSWrapper_unwrap($this.$imageCache.$get($cherry.$imagePath));
                    if ($cherryImg !== null)
                        $this.$context.drawImage($cherryImg, $cherry.$x, $cherry.$y, $cherry.$width, $cherry.$height);
                }
            }
        }
    }
    d: {
        var$2 = $this.$context;
        var$9 = "#ffffff";
        var$2.fillStyle = var$9;
        if ($this.$game.$foods !== null) {
            var$2 = $this.$game.$foods.$iterator();
            while (true) {
                if (!var$2.$hasNext())
                    break d;
                $food = var$2.$next();
                var$9 = $this.$context;
                var$11 = $food.$x;
                var$12 = $food.$y;
                var$13 = $food.$width;
                var$14 = $food.$height;
                var$9.fillRect(var$11, var$12, var$13, var$14);
            }
        }
    }
    $this.$context.fillStyle = "#ffffff";
    $this.$context.font = "18px Arial";
    if ($this.$game.$gameOver)
        $this.$context.fillText($rt_ustr((((jl_StringBuilder__init_()).$append1($rt_s(11))).$append2($this.$game.$score)).$toString()), $this.$game.$getTileSize() / 2 | 0, $this.$game.$getTileSize() / 2 | 0);
    else {
        var$2 = $this.$context;
        var$9 = (((((jl_StringBuilder__init_()).$append1($rt_s(12))).$append2($this.$game.$lives)).$append1($rt_s(13))).$append2($this.$game.$score)).$toString();
        var$15 = $this.$game;
        var$11 = var$15.$getTileSize() / 2 | 0;
        var$12 = $this.$game.$getTileSize() / 2 | 0;
        var$2.fillText($rt_ustr(var$9), var$11, var$12);
    }
},
cp_WebRenderer_getCanvas = $this => {
    return $this.$canvas;
},
ju_Set = $rt_classWithoutFields(0),
jl_StringIndexOutOfBoundsException = $rt_classWithoutFields(jl_IndexOutOfBoundsException),
jl_StringIndexOutOfBoundsException__init_ = $this => {
    jl_IndexOutOfBoundsException__init_($this);
},
jl_StringIndexOutOfBoundsException__init_0 = () => {
    let var_0 = new jl_StringIndexOutOfBoundsException();
    jl_StringIndexOutOfBoundsException__init_(var_0);
    return var_0;
},
ju_Objects = $rt_classWithoutFields(),
ju_Objects_checkFromIndexSize = ($fromIndex, $size, $length) => {
    if ($fromIndex >= 0 && $size >= 0 && $size <= ($length - $fromIndex | 0))
        return $fromIndex;
    $rt_throw(jl_IndexOutOfBoundsException__init_0());
},
otjb_TimerHandler = $rt_classWithoutFields(0);
function cp_WebApp$2() {
    jl_Object.call(this);
    this.$this$0 = null;
}
let cp_WebApp$2__init_ = ($this, $this$0) => {
    $this.$this$0 = $this$0;
    jl_Object__init_($this);
},
cp_WebApp$2__init_0 = var_0 => {
    let var_1 = new cp_WebApp$2();
    cp_WebApp$2__init_(var_1, var_0);
    return var_1;
},
cp_WebApp$2_onTimer = $this => {
    if (!(cp_WebApp_access$000($this.$this$0)).$gameOver)
        (cp_WebApp_access$000($this.$this$0)).$move();
    (cp_WebApp_access$100($this.$this$0)).$render();
    cp_WebApp_access$000($this.$this$0);
},
cp_WebApp$2_onTimer$exported$0 = var$0 => {
    var$0.$onTimer();
},
otjc_JSUndefined = $rt_classWithoutFields(),
ju_Map$Entry = $rt_classWithoutFields(0);
function ju_MapEntry() {
    let a = this; jl_Object.call(a);
    a.$key = null;
    a.$value = null;
}
let ju_MapEntry__init_ = ($this, $theKey, $theValue) => {
    jl_Object__init_($this);
    $this.$key = $theKey;
    $this.$value = $theValue;
},
ju_MapEntry__init_0 = (var_0, var_1) => {
    let var_2 = new ju_MapEntry();
    ju_MapEntry__init_(var_2, var_0, var_1);
    return var_2;
};
function ju_HashMap$HashEntry() {
    let a = this; ju_MapEntry.call(a);
    a.$origKeyHash = 0;
    a.$next0 = null;
}
let ju_HashMap$HashEntry__init_ = ($this, $theKey, $hash) => {
    ju_MapEntry__init_($this, $theKey, null);
    $this.$origKeyHash = $hash;
},
ju_HashMap$HashEntry__init_0 = (var_0, var_1) => {
    let var_2 = new ju_HashMap$HashEntry();
    ju_HashMap$HashEntry__init_(var_2, var_0, var_1);
    return var_2;
},
jlr_Type = $rt_classWithoutFields(0),
otjde_EventListener = $rt_classWithoutFields(0);
function cp_WebApp$1() {
    jl_Object.call(this);
    this.$this$00 = null;
}
let cp_WebApp$1__init_ = ($this, $this$0) => {
    $this.$this$00 = $this$0;
    jl_Object__init_($this);
},
cp_WebApp$1__init_0 = var_0 => {
    let var_1 = new cp_WebApp$1();
    cp_WebApp$1__init_(var_1, var_0);
    return var_1;
},
cp_WebApp$1_handleEvent0 = ($this, $event) => {
    (cp_WebApp_access$000($this.$this$00)).$handleKeyPress($event.keyCode);
    $event.preventDefault();
},
cp_WebApp$1_handleEvent = ($this, var$1) => {
    $this.$handleEvent(var$1);
},
cp_WebApp$1_handleEvent$exported$0 = (var$0, var$1) => {
    var$0.$handleEvent0(var$1);
};
function jl_AbstractStringBuilder() {
    let a = this; jl_Object.call(a);
    a.$buffer = null;
    a.$length0 = 0;
}
let jl_AbstractStringBuilder__init_ = $this => {
    jl_AbstractStringBuilder__init_0($this, 16);
},
jl_AbstractStringBuilder__init_2 = () => {
    let var_0 = new jl_AbstractStringBuilder();
    jl_AbstractStringBuilder__init_(var_0);
    return var_0;
},
jl_AbstractStringBuilder__init_0 = ($this, $capacity) => {
    jl_Object__init_($this);
    $this.$buffer = $rt_createCharArray($capacity);
},
jl_AbstractStringBuilder__init_1 = var_0 => {
    let var_1 = new jl_AbstractStringBuilder();
    jl_AbstractStringBuilder__init_0(var_1, var_0);
    return var_1;
},
jl_AbstractStringBuilder_append1 = ($this, $obj) => {
    return $this.$insert($this.$length0, $obj);
},
jl_AbstractStringBuilder_append = ($this, $string) => {
    return $this.$insert0($this.$length0, $string);
},
jl_AbstractStringBuilder_insert = ($this, $index, $string) => {
    let $i, var$4, var$5;
    if ($index >= 0 && $index <= $this.$length0) {
        if ($string === null)
            $string = $rt_s(14);
        else if ($string.$isEmpty())
            return $this;
        $this.$ensureCapacity($this.$length0 + $string.$length() | 0);
        $i = $this.$length0 - 1 | 0;
        while ($i >= $index) {
            $this.$buffer.data[$i + $string.$length() | 0] = $this.$buffer.data[$i];
            $i = $i + (-1) | 0;
        }
        $this.$length0 = $this.$length0 + $string.$length() | 0;
        $i = 0;
        while ($i < $string.$length()) {
            var$4 = $this.$buffer.data;
            var$5 = $index + 1 | 0;
            var$4[$index] = $string.$charAt($i);
            $i = $i + 1 | 0;
            $index = var$5;
        }
        return $this;
    }
    $rt_throw(jl_StringIndexOutOfBoundsException__init_0());
},
jl_AbstractStringBuilder_append0 = ($this, $value) => {
    return $this.$append3($value, 10);
},
jl_AbstractStringBuilder_append3 = ($this, $value, $radix) => {
    return $this.$insert1($this.$length0, $value, $radix);
},
jl_AbstractStringBuilder_insert2 = ($this, $target, $value, $radix) => {
    let $positive, var$5, var$6, $pos, $sz, $posLimit, var$10, var$11;
    $positive = 1;
    if ($value < 0) {
        $positive = 0;
        $value =  -$value | 0;
    }
    a: {
        if ($rt_ucmp($value, $radix) < 0) {
            if ($positive)
                jl_AbstractStringBuilder_insertSpace($this, $target, $target + 1 | 0);
            else {
                jl_AbstractStringBuilder_insertSpace($this, $target, $target + 2 | 0);
                var$5 = $this.$buffer.data;
                var$6 = $target + 1 | 0;
                var$5[$target] = 45;
                $target = var$6;
            }
            $this.$buffer.data[$target] = jl_Character_forDigit($value, $radix);
        } else {
            $pos = 1;
            $sz = 1;
            $posLimit = $rt_udiv((-1), $radix);
            b: {
                while (true) {
                    var$10 = $rt_imul($pos, $radix);
                    if ($rt_ucmp(var$10, $value) > 0) {
                        var$10 = $pos;
                        break b;
                    }
                    $sz = $sz + 1 | 0;
                    if ($rt_ucmp(var$10, $posLimit) > 0)
                        break;
                    $pos = var$10;
                }
            }
            if (!$positive)
                $sz = $sz + 1 | 0;
            jl_AbstractStringBuilder_insertSpace($this, $target, $target + $sz | 0);
            if ($positive)
                var$11 = $target;
            else {
                var$5 = $this.$buffer.data;
                var$11 = $target + 1 | 0;
                var$5[$target] = 45;
            }
            while (true) {
                if (!var$10)
                    break a;
                var$5 = $this.$buffer.data;
                var$6 = var$11 + 1 | 0;
                var$5[var$11] = jl_Character_forDigit($rt_udiv($value, var$10), $radix);
                $value = $rt_umod($value, var$10);
                var$10 = $rt_udiv(var$10, $radix);
                var$11 = var$6;
            }
        }
    }
    return $this;
},
jl_AbstractStringBuilder_append2 = ($this, $c) => {
    return $this.$insert2($this.$length0, $c);
},
jl_AbstractStringBuilder_insert1 = ($this, $index, $c) => {
    jl_AbstractStringBuilder_insertSpace($this, $index, $index + 1 | 0);
    $this.$buffer.data[$index] = $c;
    return $this;
},
jl_AbstractStringBuilder_insert0 = ($this, $index, $obj) => {
    return $this.$insert0($index, $obj === null ? $rt_s(14) : $obj.$toString());
},
jl_AbstractStringBuilder_ensureCapacity = ($this, $capacity) => {
    let $newLength;
    if ($this.$buffer.data.length >= $capacity)
        return;
    $newLength = $this.$buffer.data.length >= 1073741823 ? 2147483647 : jl_Math_max($capacity, jl_Math_max($this.$buffer.data.length * 2 | 0, 5));
    $this.$buffer = ju_Arrays_copyOf($this.$buffer, $newLength);
},
jl_AbstractStringBuilder_toString = $this => {
    return jl_String__init_5($this.$buffer, 0, $this.$length0);
},
jl_AbstractStringBuilder_insertSpace = ($this, $start, $end) => {
    let $sz, $i;
    $sz = $this.$length0 - $start | 0;
    $this.$ensureCapacity(($this.$length0 + $end | 0) - $start | 0);
    $i = $sz - 1 | 0;
    while ($i >= 0) {
        $this.$buffer.data[$end + $i | 0] = $this.$buffer.data[$start + $i | 0];
        $i = $i + (-1) | 0;
    }
    $this.$length0 = $this.$length0 + ($end - $start | 0) | 0;
},
jl_Appendable = $rt_classWithoutFields(0),
jl_StringBuilder = $rt_classWithoutFields(jl_AbstractStringBuilder),
jl_StringBuilder__init_0 = $this => {
    jl_AbstractStringBuilder__init_($this);
},
jl_StringBuilder__init_ = () => {
    let var_0 = new jl_StringBuilder();
    jl_StringBuilder__init_0(var_0);
    return var_0;
},
jl_StringBuilder_append = ($this, $obj) => {
    jl_AbstractStringBuilder_append1($this, $obj);
    return $this;
},
jl_StringBuilder_append1 = ($this, $string) => {
    jl_AbstractStringBuilder_append($this, $string);
    return $this;
},
jl_StringBuilder_append2 = ($this, $value) => {
    jl_AbstractStringBuilder_append0($this, $value);
    return $this;
},
jl_StringBuilder_append0 = ($this, $c) => {
    jl_AbstractStringBuilder_append2($this, $c);
    return $this;
},
jl_StringBuilder_insert1 = ($this, $index, $obj) => {
    jl_AbstractStringBuilder_insert0($this, $index, $obj);
    return $this;
},
jl_StringBuilder_insert3 = ($this, $index, $c) => {
    jl_AbstractStringBuilder_insert1($this, $index, $c);
    return $this;
},
jl_StringBuilder_insert2 = ($this, $index, $string) => {
    jl_AbstractStringBuilder_insert($this, $index, $string);
    return $this;
},
jl_StringBuilder_toString = $this => {
    return jl_AbstractStringBuilder_toString($this);
},
jl_StringBuilder_ensureCapacity = ($this, var$1) => {
    jl_AbstractStringBuilder_ensureCapacity($this, var$1);
},
jl_StringBuilder_insert0 = ($this, var$1, var$2) => {
    return $this.$insert3(var$1, var$2);
},
jl_StringBuilder_insert = ($this, var$1, var$2) => {
    return $this.$insert4(var$1, var$2);
},
jl_StringBuilder_insert4 = ($this, var$1, var$2) => {
    return $this.$insert5(var$1, var$2);
},
ju_ConcurrentModificationException = $rt_classWithoutFields(jl_RuntimeException),
ju_ConcurrentModificationException__init_ = $this => {
    jl_RuntimeException__init_($this);
},
ju_ConcurrentModificationException__init_0 = () => {
    let var_0 = new ju_ConcurrentModificationException();
    ju_ConcurrentModificationException__init_(var_0);
    return var_0;
},
jlr_AnnotatedElement = $rt_classWithoutFields(0),
ju_AbstractSet = $rt_classWithoutFields(ju_AbstractCollection),
ju_AbstractSet__init_ = $this => {
    ju_AbstractCollection__init_($this);
};
function ju_HashMap$1() {
    ju_AbstractSet.call(this);
    this.$this$01 = null;
}
let ju_HashMap$1__init_ = ($this, $this$0) => {
    $this.$this$01 = $this$0;
    ju_AbstractSet__init_($this);
},
ju_HashMap$1__init_0 = var_0 => {
    let var_1 = new ju_HashMap$1();
    ju_HashMap$1__init_(var_1, var_0);
    return var_1;
},
ju_HashMap$1_iterator = $this => {
    return ju_HashMap$KeyIterator__init_0($this.$this$01);
},
ju_Iterator = $rt_classWithoutFields(0),
ju_HashMap$KeyIterator = $rt_classWithoutFields(ju_HashMap$AbstractMapIterator),
ju_HashMap$KeyIterator__init_ = ($this, $map) => {
    ju_HashMap$AbstractMapIterator__init_($this, $map);
},
ju_HashMap$KeyIterator__init_0 = var_0 => {
    let var_1 = new ju_HashMap$KeyIterator();
    ju_HashMap$KeyIterator__init_(var_1, var_0);
    return var_1;
},
ju_HashMap$KeyIterator_next = $this => {
    ju_HashMap$AbstractMapIterator_makeNext($this);
    return $this.$currentEntry.$key;
};
function ju_AbstractMap() {
    jl_Object.call(this);
    this.$cachedKeySet = null;
}
let ju_AbstractMap__init_ = $this => {
    jl_Object__init_($this);
};
function ju_HashMap() {
    let a = this; ju_AbstractMap.call(a);
    a.$elementCount = 0;
    a.$elementData = null;
    a.$modCount = 0;
    a.$loadFactor = 0.0;
    a.$threshold = 0;
}
let ju_HashMap_newElementArray = ($this, $s) => {
    return $rt_createArray(ju_HashMap$HashEntry, $s);
},
ju_HashMap__init_1 = $this => {
    ju_HashMap__init_($this, 16);
},
ju_HashMap__init_2 = () => {
    let var_0 = new ju_HashMap();
    ju_HashMap__init_1(var_0);
    return var_0;
},
ju_HashMap__init_ = ($this, $capacity) => {
    ju_HashMap__init_0($this, $capacity, 0.75);
},
ju_HashMap__init_3 = var_0 => {
    let var_1 = new ju_HashMap();
    ju_HashMap__init_(var_1, var_0);
    return var_1;
},
ju_HashMap_calculateCapacity = $x => {
    let var$2, var$3;
    if ($x >= 1073741824)
        return 1073741824;
    if (!$x)
        return 16;
    var$2 = $x - 1 | 0;
    var$3 = var$2 | var$2 >> 1;
    var$3 = var$3 | var$3 >> 2;
    var$3 = var$3 | var$3 >> 4;
    var$3 = var$3 | var$3 >> 8;
    var$3 = var$3 | var$3 >> 16;
    return var$3 + 1 | 0;
},
ju_HashMap__init_0 = ($this, $capacity, $loadFactor) => {
    let var$3;
    ju_AbstractMap__init_($this);
    if ($capacity >= 0 && $loadFactor > 0.0) {
        var$3 = ju_HashMap_calculateCapacity($capacity);
        $this.$elementCount = 0;
        $this.$elementData = $this.$newElementArray(var$3);
        $this.$loadFactor = $loadFactor;
        ju_HashMap_computeThreshold($this);
        return;
    }
    $rt_throw(jl_IllegalArgumentException__init_0());
},
ju_HashMap__init_4 = (var_0, var_1) => {
    let var_2 = new ju_HashMap();
    ju_HashMap__init_0(var_2, var_0, var_1);
    return var_2;
},
ju_HashMap_computeThreshold = $this => {
    $this.$threshold = $this.$elementData.data.length * $this.$loadFactor | 0;
},
ju_HashMap_get = ($this, $key) => {
    let $m;
    $m = ju_HashMap_entryByKey($this, $key);
    if ($m === null)
        return null;
    return $m.$value;
},
ju_HashMap_entryByKey = ($this, $key) => {
    let $m, $hash, $index;
    if ($key === null)
        $m = ju_HashMap_findNullKeyEntry($this);
    else {
        $hash = $key.$hashCode();
        $index = $hash & ($this.$elementData.data.length - 1 | 0);
        $m = ju_HashMap_findNonNullKeyEntry($this, $key, $index, $hash);
    }
    return $m;
},
ju_HashMap_findNonNullKeyEntry = ($this, $key, $index, $keyHash) => {
    let $m;
    $m = $this.$elementData.data[$index];
    while ($m !== null && !($m.$origKeyHash == $keyHash && ju_HashMap_areEqualKeys($key, $m.$key))) {
        $m = $m.$next0;
    }
    return $m;
},
ju_HashMap_findNullKeyEntry = $this => {
    let $m;
    $m = $this.$elementData.data[0];
    while ($m !== null && $m.$key !== null) {
        $m = $m.$next0;
    }
    return $m;
},
ju_HashMap_isEmpty = $this => {
    return $this.$elementCount ? 0 : 1;
},
ju_HashMap_keySet = $this => {
    if ($this.$cachedKeySet === null)
        $this.$cachedKeySet = ju_HashMap$1__init_0($this);
    return $this.$cachedKeySet;
},
ju_HashMap_put = ($this, $key, $value) => {
    return ju_HashMap_putImpl($this, $key, $value);
},
ju_HashMap_putImpl = ($this, $key, $value) => {
    let $entry, var$4, $hash, $index, $result;
    if ($key === null) {
        $entry = ju_HashMap_findNullKeyEntry($this);
        if ($entry === null) {
            $this.$modCount = $this.$modCount + 1 | 0;
            $entry = ju_HashMap_createHashedEntry($this, null, 0, 0);
            var$4 = $this.$elementCount + 1 | 0;
            $this.$elementCount = var$4;
            if (var$4 > $this.$threshold)
                $this.$rehash();
        }
    } else {
        $hash = $key.$hashCode();
        $index = $hash & ($this.$elementData.data.length - 1 | 0);
        $entry = ju_HashMap_findNonNullKeyEntry($this, $key, $index, $hash);
        if ($entry === null) {
            $this.$modCount = $this.$modCount + 1 | 0;
            $entry = ju_HashMap_createHashedEntry($this, $key, $index, $hash);
            var$4 = $this.$elementCount + 1 | 0;
            $this.$elementCount = var$4;
            if (var$4 > $this.$threshold)
                $this.$rehash();
        }
    }
    $result = $entry.$value;
    $entry.$value = $value;
    return $result;
},
ju_HashMap_createHashedEntry = ($this, $key, $index, $hash) => {
    let $entry;
    $entry = ju_HashMap$HashEntry__init_0($key, $hash);
    $entry.$next0 = $this.$elementData.data[$index];
    $this.$elementData.data[$index] = $entry;
    return $entry;
},
ju_HashMap_rehash0 = ($this, $capacity) => {
    let $length, $newData, $i, $entry, var$6, $index, $next;
    $length = ju_HashMap_calculateCapacity(!$capacity ? 1 : $capacity << 1);
    $newData = $this.$newElementArray($length);
    $i = 0;
    while ($i < $this.$elementData.data.length) {
        $entry = $this.$elementData.data[$i];
        $this.$elementData.data[$i] = null;
        while ($entry !== null) {
            var$6 = $newData.data;
            $index = $entry.$origKeyHash & ($length - 1 | 0);
            $next = $entry.$next0;
            $entry.$next0 = var$6[$index];
            var$6[$index] = $entry;
            $entry = $next;
        }
        $i = $i + 1 | 0;
    }
    $this.$elementData = $newData;
    ju_HashMap_computeThreshold($this);
},
ju_HashMap_rehash = $this => {
    $this.$rehash0($this.$elementData.data.length);
},
ju_HashMap_remove = ($this, $key) => {
    let $entry;
    $entry = ju_HashMap_removeByKey($this, $key);
    if ($entry === null)
        return null;
    return $entry.$value;
},
ju_HashMap_removeByKey = ($this, $key) => {
    let $index, $last, $entry, $entry_0, $hash;
    a: {
        $index = 0;
        $last = null;
        if ($key === null) {
            $entry = $this.$elementData.data[0];
            while ($entry !== null) {
                if ($entry.$key === null)
                    break a;
                $entry_0 = $entry.$next0;
                $last = $entry;
                $entry = $entry_0;
            }
        } else {
            $hash = $key.$hashCode();
            $index = $hash & ($this.$elementData.data.length - 1 | 0);
            $entry = $this.$elementData.data[$index];
            while ($entry !== null && !($entry.$origKeyHash == $hash && ju_HashMap_areEqualKeys($key, $entry.$key))) {
                $entry_0 = $entry.$next0;
                $last = $entry;
                $entry = $entry_0;
            }
        }
    }
    if ($entry === null)
        return null;
    if ($last !== null)
        $last.$next0 = $entry.$next0;
    else
        $this.$elementData.data[$index] = $entry.$next0;
    $this.$modCount = $this.$modCount + 1 | 0;
    $this.$elementCount = $this.$elementCount - 1 | 0;
    return $entry;
},
ju_HashMap_areEqualKeys = ($key1, $key2) => {
    return $key1 !== $key2 && !$key1.$equals($key2) ? 0 : 1;
},
jl_ClassCastException = $rt_classWithoutFields(jl_RuntimeException);
function otji_JSWrapper() {
    jl_Object.call(this);
    this.$js = null;
}
let otji_JSWrapper_hashCodes = null,
otji_JSWrapper_wrappers = null,
otji_JSWrapper_stringWrappers = null,
otji_JSWrapper_numberWrappers = null,
otji_JSWrapper_undefinedWrapper = null,
otji_JSWrapper_stringFinalizationRegistry = null,
otji_JSWrapper_numberFinalizationRegistry = null,
otji_JSWrapper_$callClinit = () => {
    otji_JSWrapper_$callClinit = $rt_eraseClinit(otji_JSWrapper);
    otji_JSWrapper__clinit_();
},
otji_JSWrapper__init_0 = ($this, $js) => {
    otji_JSWrapper_$callClinit();
    jl_Object__init_($this);
    $this.$js = $js;
},
otji_JSWrapper__init_ = var_0 => {
    let var_1 = new otji_JSWrapper();
    otji_JSWrapper__init_0(var_1, var_0);
    return var_1;
},
otji_JSWrapper_wrap = $o => {
    let $js, $type, $isObject, $existingRef, $existing, $wrapper, $jsString, $wrapperAsJs, $jsNumber;
    otji_JSWrapper_$callClinit();
    if ($o === null)
        return null;
    $js = $o;
    $type = $rt_str(typeof $js);
    $isObject = !$type.$equals($rt_s(15)) && !$type.$equals($rt_s(16)) ? 0 : 1;
    if ($isObject && $o[$rt_jso_marker] === true)
        return $o;
    if (otji_JSWrapper_wrappers !== null) {
        if ($isObject) {
            $existingRef = otji_JSWrapper_wrappers.get($js);
            $existing = (typeof $existingRef == 'undefined' ? 1 : 0) ? void 0 : $existingRef.deref();
            if (!(typeof $existing == 'undefined' ? 1 : 0))
                return $existing;
            $wrapper = otji_JSWrapper__init_($js);
            otji_JSWrapper_wrappers.set($js, new WeakRef($wrapper));
            return $wrapper;
        }
        if ($type.$equals($rt_s(17))) {
            $jsString = $js;
            $existingRef = otji_JSWrapper_stringWrappers.get($jsString);
            $existing = (typeof $existingRef == 'undefined' ? 1 : 0) ? void 0 : $existingRef.deref();
            if (!(typeof $existing == 'undefined' ? 1 : 0))
                return $existing;
            $wrapper = otji_JSWrapper__init_($js);
            $wrapperAsJs = $wrapper;
            otji_JSWrapper_stringWrappers.set($jsString, new WeakRef($wrapperAsJs));
            otji_JSWrapper_register$js_body$_4(otji_JSWrapper_stringFinalizationRegistry, $wrapperAsJs, $jsString);
            return $wrapper;
        }
        if ($type.$equals($rt_s(18))) {
            $jsNumber = $js;
            $existingRef = otji_JSWrapper_numberWrappers.get($jsNumber);
            $existing = (typeof $existingRef == 'undefined' ? 1 : 0) ? void 0 : $existingRef.deref();
            if (!(typeof $existing == 'undefined' ? 1 : 0))
                return $existing;
            $wrapper = otji_JSWrapper__init_($js);
            $wrapperAsJs = $wrapper;
            otji_JSWrapper_numberWrappers.set($jsNumber, new WeakRef($wrapperAsJs));
            otji_JSWrapper_register$js_body$_4(otji_JSWrapper_numberFinalizationRegistry, $wrapperAsJs, $jsNumber);
            return $wrapper;
        }
        if ($type.$equals($rt_s(19))) {
            $existingRef = otji_JSWrapper_undefinedWrapper;
            $existing = $existingRef === null ? void 0 : $existingRef.deref();
            if (!(typeof $existing == 'undefined' ? 1 : 0))
                return $existing;
            $wrapper = otji_JSWrapper__init_($js);
            $wrapperAsJs = $wrapper;
            otji_JSWrapper_undefinedWrapper = new WeakRef($wrapperAsJs);
            return $wrapper;
        }
    }
    return otji_JSWrapper__init_($js);
},
otji_JSWrapper_unwrap = $o => {
    otji_JSWrapper_$callClinit();
    if ($o === null)
        return null;
    return $o[$rt_jso_marker] === true ? $o : $o.$js;
},
otji_JSWrapper_jsToJava = $o => {
    otji_JSWrapper_$callClinit();
    if ($o === null)
        return null;
    return $o instanceof $rt_objcls() ? $o : otji_JSWrapper_wrap($o);
},
otji_JSWrapper_lambda$static$1 = $token => {
    let var$2, var$3;
    otji_JSWrapper_$callClinit();
    var$2 = otji_JSWrapper_numberWrappers;
    var$3 = otji_JSWrapper_unwrap($token);
    var$2.delete(var$3);
},
otji_JSWrapper_lambda$static$0 = $token => {
    let var$2, var$3;
    otji_JSWrapper_$callClinit();
    var$2 = otji_JSWrapper_stringWrappers;
    var$3 = otji_JSWrapper_unwrap($token);
    var$2.delete(var$3);
},
otji_JSWrapper__clinit_ = () => {
    let var$1, var$2;
    otji_JSWrapper_hashCodes = new WeakMap();
    var$1 = !(typeof WeakRef !== 'undefined' ? 1 : 0) ? null : new WeakMap();
    otji_JSWrapper_wrappers = var$1;
    var$1 = !(typeof WeakRef !== 'undefined' ? 1 : 0) ? null : new Map();
    otji_JSWrapper_stringWrappers = var$1;
    var$1 = !(typeof WeakRef !== 'undefined' ? 1 : 0) ? null : new Map();
    otji_JSWrapper_numberWrappers = var$1;
    if (otji_JSWrapper_stringWrappers === null)
        var$1 = null;
    else {
        var$2 = otji_JSWrapper$_clinit_$lambda$_33_0__init_0();
        var$1 = new FinalizationRegistry(otji_JS_function(var$2, "accept"));
    }
    otji_JSWrapper_stringFinalizationRegistry = var$1;
    if (otji_JSWrapper_numberWrappers === null)
        var$1 = null;
    else {
        var$2 = otji_JSWrapper$_clinit_$lambda$_33_1__init_0();
        var$1 = new FinalizationRegistry(otji_JS_function(var$2, "accept"));
    }
    otji_JSWrapper_numberFinalizationRegistry = var$1;
},
otji_JSWrapper_register$js_body$_4 = (var$1, var$2, var$3) => {
    return var$1.register(var$2, var$3);
};
function ju_HashSet() {
    ju_AbstractSet.call(this);
    this.$backingMap = null;
}
let ju_HashSet__init_1 = $this => {
    ju_HashSet__init_0($this, ju_HashMap__init_2());
},
ju_HashSet__init_ = () => {
    let var_0 = new ju_HashSet();
    ju_HashSet__init_1(var_0);
    return var_0;
},
ju_HashSet__init_0 = ($this, $backingMap) => {
    ju_AbstractSet__init_($this);
    $this.$backingMap = $backingMap;
},
ju_HashSet__init_2 = var_0 => {
    let var_1 = new ju_HashSet();
    ju_HashSet__init_0(var_1, var_0);
    return var_1;
},
ju_HashSet_add = ($this, $object) => {
    return $this.$backingMap.$put($object, $this) !== null ? 0 : 1;
},
ju_HashSet_isEmpty = $this => {
    return $this.$backingMap.$isEmpty();
},
ju_HashSet_iterator = $this => {
    return ($this.$backingMap.$keySet()).$iterator();
},
ju_HashSet_remove = ($this, $object) => {
    return $this.$backingMap.$remove($object) === null ? 0 : 1;
},
otp_Platform = $rt_classWithoutFields(),
otp_Platform_getName = $cls => {
    return $rt_str($cls.$meta.name);
};
function cp_Block() {
    let a = this; jl_Object.call(a);
    a.$x = 0;
    a.$y = 0;
    a.$width = 0;
    a.$height = 0;
    a.$imagePath = null;
    a.$startX = 0;
    a.$startY = 0;
    a.$direction = 0;
    a.$velocityX = 0;
    a.$velocityY = 0;
    a.$walls0 = null;
    a.$tileSize0 = 0;
}
let cp_Block__init_0 = ($this, $imagePath, $x, $y, $width, $height) => {
    jl_Object__init_($this);
    $this.$direction = 85;
    $this.$velocityX = 0;
    $this.$velocityY = 0;
    $this.$imagePath = $imagePath;
    $this.$x = $x;
    $this.$y = $y;
    $this.$width = $width;
    $this.$height = $height;
    $this.$startX = $x;
    $this.$startY = $y;
},
cp_Block__init_ = (var_0, var_1, var_2, var_3, var_4) => {
    let var_5 = new cp_Block();
    cp_Block__init_0(var_5, var_0, var_1, var_2, var_3, var_4);
    return var_5;
},
cp_Block_setWalls = ($this, $walls, $tileSize) => {
    $this.$walls0 = $walls;
    $this.$tileSize0 = $tileSize;
},
cp_Block_updateDirection = ($this, $direction) => {
    let $prevDirection, var$3, $wall;
    a: {
        $prevDirection = $this.$direction;
        $this.$direction = $direction;
        $this.$updateVelocity();
        $this.$x = $this.$x + $this.$velocityX | 0;
        $this.$y = $this.$y + $this.$velocityY | 0;
        if ($this.$walls0 !== null) {
            var$3 = $this.$walls0.$iterator();
            while (true) {
                if (!var$3.$hasNext())
                    break a;
                $wall = var$3.$next();
                if (cp_Block_collision($this, $wall)) {
                    $this.$x = $this.$x - $this.$velocityX | 0;
                    $this.$y = $this.$y - $this.$velocityY | 0;
                    $this.$direction = $prevDirection;
                    $this.$updateVelocity();
                }
            }
        }
    }
},
cp_Block_updateVelocity = $this => {
    if ($this.$direction == 85) {
        $this.$velocityX = 0;
        $this.$velocityY = ( -$this.$tileSize0 | 0) / 4 | 0;
    } else if ($this.$direction == 68) {
        $this.$velocityX = 0;
        $this.$velocityY = $this.$tileSize0 / 4 | 0;
    } else if ($this.$direction == 76) {
        $this.$velocityX = ( -$this.$tileSize0 | 0) / 4 | 0;
        $this.$velocityY = 0;
    } else if ($this.$direction == 82) {
        $this.$velocityX = $this.$tileSize0 / 4 | 0;
        $this.$velocityY = 0;
    }
},
cp_Block_reset = $this => {
    $this.$x = $this.$startX;
    $this.$y = $this.$startY;
},
cp_Block_collision = ($a, $b) => {
    return $a.$x < ($b.$x + $b.$width | 0) && ($a.$x + $a.$width | 0) > $b.$x && $a.$y < ($b.$y + $b.$height | 0) && ($a.$y + $a.$height | 0) > $b.$y ? 1 : 0;
};
function jl_String() {
    jl_Object.call(this);
    this.$hashCode0 = 0;
}
let jl_String_EMPTY_CHARS = null,
jl_String_EMPTY = null,
jl_String_CASE_INSENSITIVE_ORDER = null,
jl_String_$callClinit = () => {
    jl_String_$callClinit = $rt_eraseClinit(jl_String);
    jl_String__clinit_();
},
jl_String__init_ = $this => {
    jl_String_$callClinit();
    jl_Object__init_($this);
    $this.$nativeString = "";
},
jl_String__init_6 = () => {
    let var_0 = new jl_String();
    jl_String__init_(var_0);
    return var_0;
},
jl_String__init_0 = ($this, $characters) => {
    let var$2;
    jl_String_$callClinit();
    var$2 = $characters.data;
    jl_Object__init_($this);
    $this.$nativeString = $rt_charArrayToString($characters.data, 0, var$2.length);
},
jl_String__init_3 = var_0 => {
    let var_1 = new jl_String();
    jl_String__init_0(var_1, var_0);
    return var_1;
},
jl_String__init_1 = (var$0, var$1) => {
    var$0.$nativeString = var$1;
},
jl_String__init_4 = var_0 => {
    let var_1 = new jl_String();
    jl_String__init_1(var_1, var_0);
    return var_1;
},
jl_String__init_2 = (var$0, var$1, $offset, $count) => {
    let var$4;
    jl_String_$callClinit();
    var$4 = var$1.data;
    jl_Object__init_(var$0);
    ju_Objects_checkFromIndexSize($offset, $count, var$4.length);
    var$0.$nativeString = $rt_charArrayToString(var$1.data, $offset, $count);
},
jl_String__init_5 = (var_0, var_1, var_2) => {
    let var_3 = new jl_String();
    jl_String__init_2(var_3, var_0, var_1, var_2);
    return var_3;
},
jl_String_charAt = ($this, $index) => {
    if ($index >= 0 && $index < $this.$nativeString.length)
        return $this.$nativeString.charCodeAt($index);
    $rt_throw(jl_StringIndexOutOfBoundsException__init_0());
},
jl_String_length = $this => {
    return $this.$nativeString.length;
},
jl_String_isEmpty = $this => {
    return $this.$nativeString.length ? 0 : 1;
},
jl_String_toString = $this => {
    return $this;
},
jl_String_equals = ($this, $other) => {
    let $str;
    if ($this === $other)
        return 1;
    if (!($other instanceof jl_String))
        return 0;
    $str = $other;
    return $this.$nativeString !== $str.$nativeString ? 0 : 1;
},
jl_String_hashCode = $this => {
    let $i;
    a: {
        if (!$this.$hashCode0) {
            $i = 0;
            while (true) {
                if ($i >= $this.$nativeString.length)
                    break a;
                $this.$hashCode0 = (31 * $this.$hashCode0 | 0) + $this.$nativeString.charCodeAt($i) | 0;
                $i = $i + 1 | 0;
            }
        }
    }
    return $this.$hashCode0;
},
jl_String__clinit_ = () => {
    jl_String_EMPTY_CHARS = $rt_createCharArray(0);
    jl_String_EMPTY = jl_String__init_6();
    jl_String_CASE_INSENSITIVE_ORDER = jl_String$_clinit_$lambda$_115_0__init_0();
},
otji_JSWrapper$_clinit_$lambda$_33_1 = $rt_classWithoutFields(),
otji_JSWrapper$_clinit_$lambda$_33_1__init_ = var$0 => {
    jl_Object__init_(var$0);
},
otji_JSWrapper$_clinit_$lambda$_33_1__init_0 = () => {
    let var_0 = new otji_JSWrapper$_clinit_$lambda$_33_1();
    otji_JSWrapper$_clinit_$lambda$_33_1__init_(var_0);
    return var_0;
},
otji_JSWrapper$_clinit_$lambda$_33_1_accept = (var$0, var$1) => {
    otji_JSWrapper_lambda$static$1(var$1);
},
otji_JSWrapper$_clinit_$lambda$_33_1_accept$exported$0 = (var$0, var$1) => {
    var$0.$accept(otji_JSWrapper_jsToJava(var$1));
},
ju_NoSuchElementException = $rt_classWithoutFields(jl_RuntimeException),
ju_NoSuchElementException__init_ = $this => {
    jl_RuntimeException__init_($this);
},
ju_NoSuchElementException__init_0 = () => {
    let var_0 = new ju_NoSuchElementException();
    ju_NoSuchElementException__init_(var_0);
    return var_0;
},
otjc_JSWeakRef = $rt_classWithoutFields();
function cp_PacManGame() {
    let a = this; jl_Object.call(a);
    a.$rowCount = 0;
    a.$colCount = 0;
    a.$tileSize = 0;
    a.$boardWidth = 0;
    a.$boardHeight = 0;
    a.$wallImagePath = null;
    a.$blueGhostImagePath = null;
    a.$orangeGhostImagePath = null;
    a.$pinkGhostImagePath = null;
    a.$redGhostImagePath = null;
    a.$cherryImagePath = null;
    a.$pacmanUpImagePath = null;
    a.$pacmanDownImagePath = null;
    a.$pacmanLeftImagePath = null;
    a.$pacmanRightImagePath = null;
    a.$tileMap = null;
    a.$walls = null;
    a.$foods = null;
    a.$ghosts = null;
    a.$cherries = null;
    a.$pacman = null;
    a.$directions = null;
    a.$random0 = null;
    a.$score = 0;
    a.$lives = 0;
    a.$gameOver = 0;
}
let cp_PacManGame__init_ = $this => {
    let var$1, $ghost, $newDirection;
    jl_Object__init_($this);
    $this.$rowCount = 21;
    $this.$colCount = 19;
    $this.$tileSize = 32;
    $this.$boardWidth = $rt_imul($this.$colCount, $this.$tileSize);
    $this.$boardHeight = $rt_imul($this.$rowCount, $this.$tileSize);
    $this.$wallImagePath = $rt_s(1);
    $this.$blueGhostImagePath = $rt_s(2);
    $this.$orangeGhostImagePath = $rt_s(3);
    $this.$pinkGhostImagePath = $rt_s(4);
    $this.$redGhostImagePath = $rt_s(5);
    $this.$cherryImagePath = $rt_s(6);
    $this.$pacmanUpImagePath = $rt_s(7);
    $this.$pacmanDownImagePath = $rt_s(8);
    $this.$pacmanLeftImagePath = $rt_s(9);
    $this.$pacmanRightImagePath = $rt_s(10);
    $this.$tileMap = $rt_wrapArray(jl_String, [$rt_s(20), $rt_s(21), $rt_s(22), $rt_s(23), $rt_s(24), $rt_s(25), $rt_s(26), $rt_s(27), $rt_s(28), $rt_s(29), $rt_s(30), $rt_s(31), $rt_s(30), $rt_s(32), $rt_s(22), $rt_s(33), $rt_s(34), $rt_s(35), $rt_s(36), $rt_s(37), $rt_s(20)]);
    $this.$directions = $rt_createCharArrayFromData([85, 68, 76, 82]);
    $this.$random0 = ju_Random__init_0();
    $this.$score = 0;
    $this.$lives = 3;
    $this.$gameOver = 0;
    $this.$loadMap();
    var$1 = $this.$ghosts.$iterator();
    while (var$1.$hasNext()) {
        $ghost = var$1.$next();
        $newDirection = $this.$directions.data[$this.$random0.$nextInt(4)];
        $ghost.$updateDirection($newDirection);
    }
},
cp_PacManGame__init_0 = () => {
    let var_0 = new cp_PacManGame();
    cp_PacManGame__init_(var_0);
    return var_0;
},
cp_PacManGame_loadMap = $this => {
    let $r, $c, $row, $tileMapChar, $x, $y, $wall, $ghost, $cherry, $food;
    $this.$walls = ju_HashSet__init_();
    $this.$foods = ju_HashSet__init_();
    $this.$ghosts = ju_HashSet__init_();
    $this.$cherries = ju_HashSet__init_();
    $r = 0;
    while ($r < $this.$rowCount) {
        $c = 0;
        while ($c < $this.$colCount) {
            a: {
                $row = $this.$tileMap.data[$r];
                $tileMapChar = $row.$charAt($c);
                $x = $rt_imul($c, $this.$tileSize);
                $y = $rt_imul($r, $this.$tileSize);
                if ($tileMapChar == 88) {
                    $wall = cp_Block__init_($this.$wallImagePath, $x, $y, $this.$tileSize, $this.$tileSize);
                    $this.$walls.$add($wall);
                    break a;
                }
                if ($tileMapChar == 98) {
                    $ghost = cp_Block__init_($this.$blueGhostImagePath, $x, $y, $this.$tileSize, $this.$tileSize);
                    $ghost.$setWalls($this.$walls, $this.$tileSize);
                    $this.$ghosts.$add($ghost);
                    break a;
                }
                if ($tileMapChar == 111) {
                    $ghost = cp_Block__init_($this.$orangeGhostImagePath, $x, $y, $this.$tileSize, $this.$tileSize);
                    $ghost.$setWalls($this.$walls, $this.$tileSize);
                    $this.$ghosts.$add($ghost);
                    break a;
                }
                if ($tileMapChar == 112) {
                    $ghost = cp_Block__init_($this.$pinkGhostImagePath, $x, $y, $this.$tileSize, $this.$tileSize);
                    $ghost.$setWalls($this.$walls, $this.$tileSize);
                    $this.$ghosts.$add($ghost);
                    break a;
                }
                if ($tileMapChar == 114) {
                    $ghost = cp_Block__init_($this.$redGhostImagePath, $x, $y, $this.$tileSize, $this.$tileSize);
                    $ghost.$setWalls($this.$walls, $this.$tileSize);
                    $this.$ghosts.$add($ghost);
                    break a;
                }
                if ($tileMapChar == 67) {
                    $cherry = cp_Block__init_($this.$cherryImagePath, $x, $y, $this.$tileSize, $this.$tileSize);
                    $this.$cherries.$add($cherry);
                    break a;
                }
                if ($tileMapChar == 80) {
                    $this.$pacman = cp_Block__init_($this.$pacmanRightImagePath, $x, $y, $this.$tileSize, $this.$tileSize);
                    $this.$pacman.$setWalls($this.$walls, $this.$tileSize);
                    break a;
                }
                if ($tileMapChar != 32)
                    break a;
                $food = cp_Block__init_(null, $x + 14 | 0, $y + 14 | 0, 4, 4);
                $this.$foods.$add($food);
            }
            $c = $c + 1 | 0;
        }
        $r = $r + 1 | 0;
    }
},
cp_PacManGame_move = $this => {
    let var$1, $wall, $foodEaten, $food, $cherryEaten, $cherry, $ghost, var$8, $newDirection;
    var$1 = $this.$pacman;
    var$1.$x = var$1.$x + $this.$pacman.$velocityX | 0;
    var$1 = $this.$pacman;
    var$1.$y = var$1.$y + $this.$pacman.$velocityY | 0;
    var$1 = $this.$walls.$iterator();
    a: {
        while (true) {
            if (!var$1.$hasNext())
                break a;
            $wall = var$1.$next();
            if (cp_Block_collision($this.$pacman, $wall))
                break;
        }
        var$1 = $this.$pacman;
        var$1.$x = var$1.$x - $this.$pacman.$velocityX | 0;
        var$1 = $this.$pacman;
        var$1.$y = var$1.$y - $this.$pacman.$velocityY | 0;
    }
    if ($this.$pacman.$x > $rt_imul($this.$tileSize, $this.$colCount))
        $this.$pacman.$x = 0;
    else if ($this.$pacman.$y > $rt_imul($this.$tileSize, $this.$rowCount))
        $this.$pacman.$y = 0;
    else if ($this.$pacman.$x < 0)
        $this.$pacman.$x = $rt_imul($this.$tileSize, $this.$colCount);
    else if ($this.$pacman.$y < 0)
        $this.$pacman.$y = $rt_imul($this.$tileSize, $this.$rowCount);
    var$1 = $this.$ghosts.$iterator();
    while (true) {
        if (!var$1.$hasNext()) {
            $foodEaten = null;
            var$1 = $this.$foods.$iterator();
            while (var$1.$hasNext()) {
                $food = var$1.$next();
                if (cp_Block_collision($this.$pacman, $food)) {
                    $this.$score = $this.$score + 10 | 0;
                    $foodEaten = $food;
                }
            }
            $this.$foods.$remove0($foodEaten);
            $cherryEaten = null;
            var$1 = $this.$cherries.$iterator();
            while (var$1.$hasNext()) {
                $cherry = var$1.$next();
                if (cp_Block_collision($this.$pacman, $cherry)) {
                    $this.$score = $this.$score + 50 | 0;
                    $cherryEaten = $cherry;
                }
            }
            $this.$cherries.$remove0($cherryEaten);
            if ($this.$foods.$isEmpty() && $this.$cherries.$isEmpty()) {
                $this.$loadMap();
                $this.$resetPositions();
            }
            return;
        }
        $ghost = var$1.$next();
        if (cp_Block_collision($ghost, $this.$pacman)) {
            $this.$lives = $this.$lives - 1 | 0;
            if (!$this.$lives)
                break;
            $this.$resetPositions();
        }
        if ($ghost.$y == ($this.$tileSize * 9 | 0) && $ghost.$direction != 85 && $ghost.$direction != 68)
            $ghost.$updateDirection(85);
        $ghost.$x = $ghost.$x + $ghost.$velocityX | 0;
        $ghost.$y = $ghost.$y + $ghost.$velocityY | 0;
        var$8 = $this.$walls.$iterator();
        while (var$8.$hasNext()) {
            $wall = var$8.$next();
            if (!(!cp_Block_collision($ghost, $wall) && $ghost.$x > 0 && ($ghost.$x + $ghost.$width | 0) < $this.$boardWidth)) {
                $ghost.$x = $ghost.$x - $ghost.$velocityX | 0;
                $ghost.$y = $ghost.$y - $ghost.$velocityY | 0;
                $newDirection = $this.$directions.data[$this.$random0.$nextInt(4)];
                $ghost.$updateDirection($newDirection);
            }
        }
    }
    $this.$gameOver = 1;
},
cp_PacManGame_resetPositions = $this => {
    let var$1, $ghost, $newDirection;
    $this.$pacman.$reset();
    $this.$pacman.$velocityX = 0;
    $this.$pacman.$velocityY = 0;
    var$1 = $this.$ghosts.$iterator();
    while (var$1.$hasNext()) {
        $ghost = var$1.$next();
        $ghost.$reset();
        $newDirection = $this.$directions.data[$this.$random0.$nextInt(4)];
        $ghost.$updateDirection($newDirection);
    }
},
cp_PacManGame_handleKeyPress = ($this, $keyCode) => {
    if ($this.$gameOver) {
        $this.$loadMap();
        $this.$resetPositions();
        $this.$lives = 3;
        $this.$score = 0;
        $this.$gameOver = 0;
        return;
    }
    if ($keyCode == 38) {
        $this.$pacman.$updateDirection(85);
        $this.$pacman.$imagePath = $this.$pacmanUpImagePath;
    } else if ($keyCode == 40) {
        $this.$pacman.$updateDirection(68);
        $this.$pacman.$imagePath = $this.$pacmanDownImagePath;
    } else if ($keyCode == 37) {
        $this.$pacman.$updateDirection(76);
        $this.$pacman.$imagePath = $this.$pacmanLeftImagePath;
    } else if ($keyCode == 39) {
        $this.$pacman.$updateDirection(82);
        $this.$pacman.$imagePath = $this.$pacmanRightImagePath;
    }
},
cp_PacManGame_getBoardWidth = $this => {
    return $this.$boardWidth;
},
cp_PacManGame_getBoardHeight = $this => {
    return $this.$boardHeight;
},
cp_PacManGame_getTileSize = $this => {
    return $this.$tileSize;
},
jl_IllegalArgumentException = $rt_classWithoutFields(jl_RuntimeException),
jl_IllegalArgumentException__init_ = $this => {
    jl_RuntimeException__init_($this);
},
jl_IllegalArgumentException__init_0 = () => {
    let var_0 = new jl_IllegalArgumentException();
    jl_IllegalArgumentException__init_(var_0);
    return var_0;
};
function jl_Class() {
    let a = this; jl_Object.call(a);
    a.$name = null;
    a.$platformClass = null;
}
let jl_Class__init_ = ($this, $platformClass) => {
    let var$2;
    jl_Object__init_($this);
    $this.$platformClass = $platformClass;
    var$2 = $this;
    $platformClass.classObject = var$2;
},
jl_Class__init_0 = var_0 => {
    let var_1 = new jl_Class();
    jl_Class__init_(var_1, var_0);
    return var_1;
},
jl_Class_getClass = $cls => {
    let $result;
    if ($cls === null)
        return null;
    $result = $cls.classObject;
    if ($result === null)
        $result = jl_Class__init_0($cls);
    return $result;
},
jl_Class_getName = $this => {
    if ($this.$name === null)
        $this.$name = otp_Platform_getName($this.$platformClass);
    return $this.$name;
},
ju_Comparator = $rt_classWithoutFields(0),
jl_String$_clinit_$lambda$_115_0 = $rt_classWithoutFields(),
jl_String$_clinit_$lambda$_115_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
jl_String$_clinit_$lambda$_115_0__init_0 = () => {
    let var_0 = new jl_String$_clinit_$lambda$_115_0();
    jl_String$_clinit_$lambda$_115_0__init_(var_0);
    return var_0;
};
$rt_packages([-1, "java", 0, "lang"
]);
$rt_metadata([jl_Object, "Object", 1, 0, [], 0, 3, 0, 0, ["$getClass0", $rt_wrapFunction0(jl_Object_getClass), "$hashCode", $rt_wrapFunction0(jl_Object_hashCode), "$equals", $rt_wrapFunction1(jl_Object_equals), "$toString", $rt_wrapFunction0(jl_Object_toString), "$identity", $rt_wrapFunction0(jl_Object_identity)],
jl_Throwable, 0, jl_Object, [], 0, 3, 0, 0, ["$fillInStackTrace", $rt_wrapFunction0(jl_Throwable_fillInStackTrace), "$getMessage", $rt_wrapFunction0(jl_Throwable_getMessage), "$getCause", $rt_wrapFunction0(jl_Throwable_getCause)],
jl_Exception, 0, jl_Throwable, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(jl_Exception__init_0), "$_init_0", $rt_wrapFunction1(jl_Exception__init_)],
jl_RuntimeException, 0, jl_Exception, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(jl_RuntimeException__init_), "$_init_0", $rt_wrapFunction1(jl_RuntimeException__init_0)],
jl_IndexOutOfBoundsException, 0, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(jl_IndexOutOfBoundsException__init_)],
ju_Arrays, 0, jl_Object, [], 0, 3, 0, 0, 0,
ju_HashMap$AbstractMapIterator, 0, jl_Object, [], 0, 0, 0, 0, ["$_init_7", $rt_wrapFunction1(ju_HashMap$AbstractMapIterator__init_), "$hasNext", $rt_wrapFunction0(ju_HashMap$AbstractMapIterator_hasNext), "$checkConcurrentMod", $rt_wrapFunction0(ju_HashMap$AbstractMapIterator_checkConcurrentMod), "$makeNext", $rt_wrapFunction0(ju_HashMap$AbstractMapIterator_makeNext)],
cp_WebApp, 0, jl_Object, [], 0, 3, 0, cp_WebApp_$callClinit, ["$_init_", $rt_wrapFunction0(cp_WebApp__init_), "$start", $rt_wrapFunction0(cp_WebApp_start)],
jur_RandomGenerator, 0, jl_Object, [], 3, 3, 0, 0, 0,
ji_Serializable, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_Random, 0, jl_Object, [jur_RandomGenerator, ji_Serializable], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(ju_Random__init_), "$nextInt", $rt_wrapFunction1(ju_Random_nextInt), "$nextDouble", $rt_wrapFunction0(ju_Random_nextDouble)],
jl_Number, 0, jl_Object, [ji_Serializable], 1, 3, 0, 0, 0,
jl_Comparable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_Integer, 0, jl_Number, [jl_Comparable], 0, 3, 0, jl_Integer_$callClinit, 0,
jl_Iterable, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_Collection, 0, jl_Object, [jl_Iterable], 3, 3, 0, 0, 0,
ju_AbstractCollection, 0, jl_Object, [ju_Collection], 1, 3, 0, 0, ["$_init_", $rt_wrapFunction0(ju_AbstractCollection__init_)],
jl_Character, 0, jl_Object, [jl_Comparable], 0, 3, 0, jl_Character_$callClinit, 0,
otci_IntegerUtil, 0, jl_Object, [], 4, 3, 0, 0, 0,
ju_Map, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_Math, 0, jl_Object, [], 4, 3, 0, 0, 0,
otjc_JSObjects, 0, jl_Object, [], 4, 3, 0, 0, 0,
jl_Cloneable, 0, jl_Object, [], 3, 3, 0, 0, 0,
otji_JS, 0, jl_Object, [], 4, 0, 0, 0, 0,
otj_JSObject, 0, jl_Object, [], 3, 3, 0, 0, 0,
otjc_JSFinalizationRegistryConsumer, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
otji_JSWrapper$_clinit_$lambda$_33_0, 0, jl_Object, [otjc_JSFinalizationRegistryConsumer], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(otji_JSWrapper$_clinit_$lambda$_33_0__init_), "$accept", $rt_wrapFunction1(otji_JSWrapper$_clinit_$lambda$_33_0_accept), "$accept$exported$0", $rt_wrapFunction1(otji_JSWrapper$_clinit_$lambda$_33_0_accept$exported$0)],
jl_CharSequence, 0, jl_Object, [], 3, 3, 0, 0, 0,
cp_WebRenderer, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_1", $rt_wrapFunction1(cp_WebRenderer__init_), "$render", $rt_wrapFunction0(cp_WebRenderer_render), "$getCanvas", $rt_wrapFunction0(cp_WebRenderer_getCanvas)],
ju_Set, 0, jl_Object, [ju_Collection], 3, 3, 0, 0, 0,
jl_StringIndexOutOfBoundsException, 0, jl_IndexOutOfBoundsException, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(jl_StringIndexOutOfBoundsException__init_)],
ju_Objects, 0, jl_Object, [], 4, 3, 0, 0, 0,
otjb_TimerHandler, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
cp_WebApp$2, 0, jl_Object, [otjb_TimerHandler], 0, 0, 0, 0, ["$_init_2", $rt_wrapFunction1(cp_WebApp$2__init_), "$onTimer", $rt_wrapFunction0(cp_WebApp$2_onTimer), "$onTimer$exported$0", $rt_wrapFunction0(cp_WebApp$2_onTimer$exported$0)],
otjc_JSUndefined, 0, jl_Object, [otj_JSObject], 0, 3, 0, 0, 0,
ju_Map$Entry, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_MapEntry, 0, jl_Object, [ju_Map$Entry, jl_Cloneable], 0, 0, 0, 0, ["$_init_4", $rt_wrapFunction2(ju_MapEntry__init_)],
ju_HashMap$HashEntry, 0, ju_MapEntry, [], 0, 0, 0, 0, ["$_init_9", $rt_wrapFunction2(ju_HashMap$HashEntry__init_)],
jlr_Type, 0, jl_Object, [], 3, 3, 0, 0, 0,
otjde_EventListener, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
cp_WebApp$1, 0, jl_Object, [otjde_EventListener], 0, 0, 0, 0, ["$_init_2", $rt_wrapFunction1(cp_WebApp$1__init_), "$handleEvent", $rt_wrapFunction1(cp_WebApp$1_handleEvent0), "$handleEvent0", $rt_wrapFunction1(cp_WebApp$1_handleEvent), "$handleEvent$exported$0", $rt_wrapFunction1(cp_WebApp$1_handleEvent$exported$0)],
jl_AbstractStringBuilder, 0, jl_Object, [ji_Serializable, jl_CharSequence], 0, 0, 0, 0, ["$_init_", $rt_wrapFunction0(jl_AbstractStringBuilder__init_), "$_init_5", $rt_wrapFunction1(jl_AbstractStringBuilder__init_0), "$append4", $rt_wrapFunction1(jl_AbstractStringBuilder_append1), "$append5", $rt_wrapFunction1(jl_AbstractStringBuilder_append), "$insert0", $rt_wrapFunction2(jl_AbstractStringBuilder_insert), "$append6", $rt_wrapFunction1(jl_AbstractStringBuilder_append0), "$append3", $rt_wrapFunction2(jl_AbstractStringBuilder_append3),
"$insert1", $rt_wrapFunction3(jl_AbstractStringBuilder_insert2), "$append7", $rt_wrapFunction1(jl_AbstractStringBuilder_append2), "$insert2", $rt_wrapFunction2(jl_AbstractStringBuilder_insert1), "$insert", $rt_wrapFunction2(jl_AbstractStringBuilder_insert0), "$ensureCapacity", $rt_wrapFunction1(jl_AbstractStringBuilder_ensureCapacity), "$toString", $rt_wrapFunction0(jl_AbstractStringBuilder_toString)],
jl_Appendable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_StringBuilder, 0, jl_AbstractStringBuilder, [jl_Appendable], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(jl_StringBuilder__init_0), "$append", $rt_wrapFunction1(jl_StringBuilder_append), "$append1", $rt_wrapFunction1(jl_StringBuilder_append1), "$append2", $rt_wrapFunction1(jl_StringBuilder_append2), "$append0", $rt_wrapFunction1(jl_StringBuilder_append0), "$insert3", $rt_wrapFunction2(jl_StringBuilder_insert1), "$insert4", $rt_wrapFunction2(jl_StringBuilder_insert3), "$insert5", $rt_wrapFunction2(jl_StringBuilder_insert2),
"$toString", $rt_wrapFunction0(jl_StringBuilder_toString), "$ensureCapacity", $rt_wrapFunction1(jl_StringBuilder_ensureCapacity), "$insert", $rt_wrapFunction2(jl_StringBuilder_insert0), "$insert2", $rt_wrapFunction2(jl_StringBuilder_insert), "$insert0", $rt_wrapFunction2(jl_StringBuilder_insert4)],
ju_ConcurrentModificationException, 0, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(ju_ConcurrentModificationException__init_)],
jlr_AnnotatedElement, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_AbstractSet, 0, ju_AbstractCollection, [ju_Set], 1, 3, 0, 0, ["$_init_", $rt_wrapFunction0(ju_AbstractSet__init_)],
ju_HashMap$1, 0, ju_AbstractSet, [], 0, 0, 0, 0, ["$_init_7", $rt_wrapFunction1(ju_HashMap$1__init_), "$iterator", $rt_wrapFunction0(ju_HashMap$1_iterator)],
ju_Iterator, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_HashMap$KeyIterator, 0, ju_HashMap$AbstractMapIterator, [ju_Iterator], 0, 0, 0, 0, ["$_init_7", $rt_wrapFunction1(ju_HashMap$KeyIterator__init_), "$next", $rt_wrapFunction0(ju_HashMap$KeyIterator_next)]]);
$rt_metadata([ju_AbstractMap, 0, jl_Object, [ju_Map], 1, 3, 0, 0, ["$_init_", $rt_wrapFunction0(ju_AbstractMap__init_)],
ju_HashMap, 0, ju_AbstractMap, [jl_Cloneable, ji_Serializable], 0, 3, 0, 0, ["$newElementArray", $rt_wrapFunction1(ju_HashMap_newElementArray), "$_init_", $rt_wrapFunction0(ju_HashMap__init_1), "$_init_5", $rt_wrapFunction1(ju_HashMap__init_), "$_init_8", $rt_wrapFunction2(ju_HashMap__init_0), "$get", $rt_wrapFunction1(ju_HashMap_get), "$entryByKey", $rt_wrapFunction1(ju_HashMap_entryByKey), "$findNonNullKeyEntry", $rt_wrapFunction3(ju_HashMap_findNonNullKeyEntry), "$findNullKeyEntry", $rt_wrapFunction0(ju_HashMap_findNullKeyEntry),
"$isEmpty", $rt_wrapFunction0(ju_HashMap_isEmpty), "$keySet", $rt_wrapFunction0(ju_HashMap_keySet), "$put", $rt_wrapFunction2(ju_HashMap_put), "$rehash0", $rt_wrapFunction1(ju_HashMap_rehash0), "$rehash", $rt_wrapFunction0(ju_HashMap_rehash), "$remove", $rt_wrapFunction1(ju_HashMap_remove), "$removeByKey", $rt_wrapFunction1(ju_HashMap_removeByKey)],
jl_ClassCastException, 0, jl_RuntimeException, [], 0, 3, 0, 0, 0,
otji_JSWrapper, 0, jl_Object, [], 4, 3, 0, otji_JSWrapper_$callClinit, 0,
ju_HashSet, 0, ju_AbstractSet, [jl_Cloneable, ji_Serializable], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(ju_HashSet__init_1), "$_init_7", $rt_wrapFunction1(ju_HashSet__init_0), "$add", $rt_wrapFunction1(ju_HashSet_add), "$isEmpty", $rt_wrapFunction0(ju_HashSet_isEmpty), "$iterator", $rt_wrapFunction0(ju_HashSet_iterator), "$remove0", $rt_wrapFunction1(ju_HashSet_remove)],
otp_Platform, 0, jl_Object, [], 4, 3, 0, 0, 0,
cp_Block, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_11", function(var_1, var_2, var_3, var_4, var_5) { cp_Block__init_0(this, var_1, var_2, var_3, var_4, var_5); }, "$setWalls", $rt_wrapFunction2(cp_Block_setWalls), "$updateDirection", $rt_wrapFunction1(cp_Block_updateDirection), "$updateVelocity", $rt_wrapFunction0(cp_Block_updateVelocity), "$reset", $rt_wrapFunction0(cp_Block_reset)],
jl_String, 0, jl_Object, [ji_Serializable, jl_Comparable, jl_CharSequence], 0, 3, 0, jl_String_$callClinit, ["$_init_", $rt_wrapFunction0(jl_String__init_), "$_init_3", $rt_wrapFunction1(jl_String__init_0), "$_init_13", $rt_wrapFunction1(jl_String__init_1), "$_init_6", $rt_wrapFunction3(jl_String__init_2), "$charAt", $rt_wrapFunction1(jl_String_charAt), "$length", $rt_wrapFunction0(jl_String_length), "$isEmpty", $rt_wrapFunction0(jl_String_isEmpty), "$toString", $rt_wrapFunction0(jl_String_toString), "$equals",
$rt_wrapFunction1(jl_String_equals), "$hashCode", $rt_wrapFunction0(jl_String_hashCode)],
otji_JSWrapper$_clinit_$lambda$_33_1, 0, jl_Object, [otjc_JSFinalizationRegistryConsumer], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(otji_JSWrapper$_clinit_$lambda$_33_1__init_), "$accept", $rt_wrapFunction1(otji_JSWrapper$_clinit_$lambda$_33_1_accept), "$accept$exported$0", $rt_wrapFunction1(otji_JSWrapper$_clinit_$lambda$_33_1_accept$exported$0)],
ju_NoSuchElementException, 0, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(ju_NoSuchElementException__init_)],
otjc_JSWeakRef, 0, jl_Object, [otj_JSObject], 1, 3, 0, 0, 0,
cp_PacManGame, 0, jl_Object, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(cp_PacManGame__init_), "$loadMap", $rt_wrapFunction0(cp_PacManGame_loadMap), "$move", $rt_wrapFunction0(cp_PacManGame_move), "$resetPositions", $rt_wrapFunction0(cp_PacManGame_resetPositions), "$handleKeyPress", $rt_wrapFunction1(cp_PacManGame_handleKeyPress), "$getBoardWidth", $rt_wrapFunction0(cp_PacManGame_getBoardWidth), "$getBoardHeight", $rt_wrapFunction0(cp_PacManGame_getBoardHeight), "$getTileSize", $rt_wrapFunction0(cp_PacManGame_getTileSize)],
jl_IllegalArgumentException, 0, jl_RuntimeException, [], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(jl_IllegalArgumentException__init_)],
jl_Class, 0, jl_Object, [jlr_AnnotatedElement, jlr_Type], 0, 3, 0, 0, ["$getName", $rt_wrapFunction0(jl_Class_getName)],
ju_Comparator, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_String$_clinit_$lambda$_115_0, 0, jl_Object, [ju_Comparator], 0, 3, 0, 0, ["$_init_", $rt_wrapFunction0(jl_String$_clinit_$lambda$_115_0__init_)]]);
let $rt_charArrayCls = $rt_arraycls($rt_charcls);
$rt_stringPool(["0", "images/wall.png", "images/blueGhost.png", "images/orangeGhost.png", "images/pinkGhost.png", "images/redGhost.png", "images/cherry.png", "images/pacmanUp.png", "images/pacmanDown.png", "images/pacmanLeft.png", "images/pacmanRight.png", "Game Over: ", "x", " Score: ", "null", "object", "function", "string", "number", "undefined", "XXOXXXXXXXXXXXXXOXX", "X   C    X    C   X", "X XX XXX X XXX XX X", "X                 X", "X XX X XXXXX X XX X", "X C  X       X    X", "XXXX XXXX XXXX XXXX",
"OOOX X   C   X XOOO", "XXXX X XXrXX X XXXX", "O C     bpo       O", "XXXX X XXXXX X XXXX", "OOOX X       X XOOO", "X    C   X   C    X", "X  X  C  P     X  X", "XX X X XXXXX X X XX", "X    X   X   X    X", "X XXXXXX X XXXXXX X", "XC       C        X"]);
jl_String.prototype.toString = function() {
    return $rt_ustr(this);
};
jl_String.prototype.valueOf = jl_String.prototype.toString;
jl_Object.prototype.toString = function() {
    return $rt_ustr(jl_Object_toString(this));
};
jl_Object.prototype.__teavm_class__ = function() {
    return $dbg_class(this);
};
let $rt_export_main = $rt_mainStarter(cp_WebApp_main);
$rt_export_main.javaException = $rt_javaException;
let $rt_jso_marker = Symbol('jsoClass');
(() => {
    let c;
    c = otji_JSWrapper$_clinit_$lambda$_33_0.prototype;
    c[$rt_jso_marker] = true;
    c.accept = c.$accept$exported$0;
    c = cp_WebApp$2.prototype;
    c[$rt_jso_marker] = true;
    c.onTimer = c.$onTimer$exported$0;
    c = cp_WebApp$1.prototype;
    c[$rt_jso_marker] = true;
    c.handleEvent = c.$handleEvent$exported$0;
    c = otji_JSWrapper$_clinit_$lambda$_33_1.prototype;
    c[$rt_jso_marker] = true;
    c.accept = c.$accept$exported$0;
})();
$rt_exports.main = $rt_export_main;
}));
