// オブジェクトのプロパティから Union Typeを取得
// eslint-disable-next-line no-unused-vars
export type Unbox<T> = T extends { [K in keyof T]: infer U } ? U : never;
