let tong = (a,b) => a+b;
//goi ham tong voi a = 5 va b=3,sau do in ket qua ra console
console.log(tong(5,3));

let chao = () => console.log("Xin chao!");
//Goi ham hao de in ra loi chao
chao();


//1.Viet ham Chao1 nhan 1 tham so ten va in ra loi chao voi ten do 
//sau do goi
let chao1= (ten) => console.log(`Xin chao,${ten}!`);
//Gọi hàm Chao 1 với tên "Alice"
chao1("Alice");
chao1();
//2.Viet ham Chao2 nhan 1 tham so la 1 doi tuong Person
//có các thuộc tính id,name,age,address.
//Sau đó in ra lời chào với tên của đối tượng đó.
//Gọi hàm Chao2 với một đối tượng Person mẫu
//Khai báo một đối tượng Person mẫu
let person = {
    id:1,
    name:"Bob",
    age:30,
    address:"123 Main St"
};
//Định nghĩa hàm Chao2 nhận một đối tượng Person
let chao2 = (person) => console.log(`Xin chào, ${person.name}!`);
//Gọi hàm Chao2 với đối tượng Person mẫu 
let chao2 = (person) => console.log(`Xin chao, ${person.name}!`);

chao2(person);