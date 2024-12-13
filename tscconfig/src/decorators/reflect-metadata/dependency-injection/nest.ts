import "reflect-metadata";

type Constructor<T = any> = new (...args: any[]) => T;

const PATH_METADATA = "path";
const METHOD_METADATA = "method";
@Controller("/test")
class SomeClass {
  @Get("/a")
  someGetMethod() {
    return "hello world";
  }

  @Post("/b")
  somePostMethod() {}
}

function Controller<T>(value: string) {
  return function (target: Constructor<T>) {
    Reflect.defineMetadata(PATH_METADATA, value, target);
  };
}

function createMappingDecorator(method: string, path: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    Reflect.defineMetadata(PATH_METADATA, path, target, propertyKey);
    Reflect.defineMetadata(METHOD_METADATA, method, target, propertyKey);
  };
}

function Get(path: string) {
  return createMappingDecorator("GET", path);
}

function Post(path: string) {
  return createMappingDecorator("POST", path);
}

const routes = Reflect.getMetadata(PATH_METADATA, SomeClass);
const methods = Reflect.getMetadata(METHOD_METADATA, SomeClass);

console.log(routes);
console.log(methods);

function isConstructor(value: any) {
  return typeof value === "function" && value.prototype !== undefined;
}

function isFunction(value: any) {
  return typeof value === "function";
}

function mapRoutes(instance: Object) {
  const prototype = Object.getPrototypeOf(instance);

  const methodNames = Object.getOwnPropertyNames(prototype).filter(
    (item) => isFunction(prototype[item]) && !isConstructor(prototype[item])
  );

  return methodNames.map((methodName) => {
    const fn = prototype[methodName];
    const route = Reflect.getMetadata(PATH_METADATA, instance, methodName);
    const method = Reflect.getMetadata(METHOD_METADATA, instance, methodName);

    return {
      route,
      method,
      methodName,
      fn,
    };
  });
}

console.log(mapRoutes(new SomeClass()));

console.log(1)