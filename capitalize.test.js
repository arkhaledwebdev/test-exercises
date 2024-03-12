import capitalize from "./capitalize"

test("capitalize the first letter of cairo", ()=>{
    expect(capitalize("cairo")).toBe("Cairo")
});

test("capitalize the first letter of eGYPT", ()=>{
    expect(capitalize("eGYPT")).toBe("EGYPT")
});

test("capitalize the first letter of eGYPT", ()=>{
    expect(capitalize("Egypt")).toBe("Egypt")
});