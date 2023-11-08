type Quote = {
    quote: string,
    author: string
  }
  
  type Test = {
    list: Quote[]
  }
  
  const test: Test = {
    list: [
      { quote: 'There are only two kinds of languages: the ones people complain about and the ones nobody uses.', author: 'Bjarne Stroustrup' },
      { quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', author: 'Martin Fowler' },
      { quote: 'First, solve the problem. Then, write the code.', author: 'John Johnson' },
      { quote: 'Java is to JavaScript what car is to Carpet.', author: 'Chris Heilmann' },
    ]
  }
  
  const quotes: Record<number, Quote> = {};
  test.list.forEach((quote, index) => {
    quotes[index + 1] = quote;
  });
  
  if (3 in quotes) {
    console.log(`quotes: `, quotes[4]);
  }
  quotes
  export default function Test() {

    return (
      <>
      <h1> Page </h1>
      </>
    );
    }
  