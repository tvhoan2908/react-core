export class CacheUtils {
  static get instance() {
    return localStorage;
  }

  static set(key: string, value: string) {
    CacheUtils.instance.setItem(key, value);
  }

  static get(key: string): string | null {
    return CacheUtils.instance.getItem(key);
  }

  static clearAll() {
    CacheUtils.instance.clear();
  }
}
