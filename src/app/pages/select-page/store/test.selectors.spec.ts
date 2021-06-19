import { selectStoreText } from "./test.selectors";
 
describe("Selectors", () => {
  const initialState = {
    text: [
      {
        title: 'First title',
        body: 'First message'
      }
    ],
    range: 1,
    loading: false,
  };
 
  it("should select the text list", () => {
    const result = selectStoreText.projector(initialState.text);
    console.log(result,'result')
    expect(result[0].title).toEqual("First title");
  });
});