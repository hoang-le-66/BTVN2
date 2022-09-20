const Bai_16 = (a)=>{
    a = a.split('/');
    let b = a[a.length - 1].split('.');
    let c = b.slice(0, b.length - 1).join(' ');
    return c
}
console.log(Bai_16('https://www.facebook.com/tung.nguyenthac.1'));