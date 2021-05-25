export {};

let dayOfTheWeek: "日" | "月" | "火" | "水" | "木" | "金" | "土" = "日"; // literal型は、代入できる値を指定できる。union型とのコラボで、複数指定可能。
dayOfTheWeek = "月";
//dayOfTheWeek = "31";