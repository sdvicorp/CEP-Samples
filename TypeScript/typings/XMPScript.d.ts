// A commonly used construct for loading XMPScript into ExtendScript contexts.
interface ExternalObjectConstructor {
  AdobeXMPScript: ExternalObject | undefined;
}

interface XMPMetaConstructor {
  /** Creates an empty object. */
  new (): XMPMetaInstance;
  /**
   * @param packet A String containing an XML file or an XMP packet.
   */
  new (packet: string): XMPMetaInstance;
  /**
   * @param buffer The UTF-8 or UTF-16 encoded bytes of an XML file
   * or an XMP packet. This array is the result of a call to `serializeToArray`
   * on an `XMPMeta` instance.
   */
  new (buffer: number[]): XMPMetaInstance;

  // Class stuff.
}


interface XMPProperty {
  path: string;
  value: string | number | boolean | null | undefined;
}

interface XMPPropertyIterator {
  next(): XMPProperty;
}

interface XMPMetaInstance {
  doesPropertyExist(namespace:string, value:string): boolean
  getProperty(namespace:string, property:string): XMPProperty
  setProperty(namespace:string, property:string, value:string, options:number): boolean
  countArrayItems(namespace:string, property:string): Number
  getArrayItem(namespace:string, property:string, itemIndex:Number): XMPProperty
  deleteProperty(namespace:string, property:string): boolean
  appendArrayItem(namespace:string, property:string, arrayOptions:string, valueToAppend:string, valueOptions:string): boolean
  dumpObject():string
  serialize(): string
  // Instance stuff.

  iterator(): XMPPropertyIterator;
}

declare const XMPMeta: XMPMetaConstructor | undefined;

interface XMPConstConstructor {
  new (): XMPConstInstance;
  NS_DM: string;
  NS_DC: string;
  ARRAY_IS_ORDERED: string;
  // Class stuff.
}

interface XMPConstInstance {
  // Instance stuff.
}

declare const XMPConst: XMPConstConstructor | undefined;
