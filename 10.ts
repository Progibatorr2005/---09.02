function getParams(a: string): any {
    const p = a.split('&'); 
    const r: any = {}; // 
  
    p.reduce((acc: any, pair: string) => {
      const [key, value] = pair.split('='); 
      acc[key] = value; 
      return acc;
    }, r);
  
    return r;
  }
  
  console.log(getParams('per=10&page=5'));
  // { per: '10', page: '5' }
  console.log(getParams('name=hexlet&count=3&order=asc'));
  // { name: 'hexlet', count: '3', order: 'asc' }