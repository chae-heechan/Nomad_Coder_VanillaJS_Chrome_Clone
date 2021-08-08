'user strict';

class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  speak(){
    console.log(`${this.name}: hello! i'm ${this.age}.`);
  }

  get age(){
    return this._age;
  }

  set age(value){
    this._age = value < 0 ? 0 : value; 
  }
}

const chae = new Person('chae', 24);
chae.speak();

// 2. public, private

class Experiment{
  // 그냥 쓰면 public, 앞에 #을 쓰면 private
  publicField = 2;
  #privateField = 0;
}

// 3. static
class Article{
  static publisher = "chae";
  constructor(articleNumber){
    this.articleNumber = articleNumber;
  }

  static printPublisher(){
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2= new Article(2);

// static은 객체에 할당되지 않아서 undefined가 출력된다.
console.log(article1.publisher);
// static은 class에 할당된다. 이렇게 하면 제대로 출력 된다.
console.log(Article.publisher);

// 4. 상속, 다양성
class Shape{
  constructor(width, height, color){
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw(){
    console.log(`drawing ${this.color} color of`);
  }

  getArea(){
    return this.width * this.height;
  }
}

class RectAngle extends Shape{}
class TriAngle extends Shape{
  draw(){
    // 부모의 함수를 호출하고 싶으면 super을 사용한다.
    super.draw();
    console.log("삼각형");
  }
  // overriding(오버라이딩)
  getArea(){
    return (this.width * this.height) / 2;
  }
}

const rect = new RectAngle(20, 20, "blue");
rect.draw();
console.log(rect.getArea());

const tri = new TriAngle(20, 20, "yellow");
tri.draw();
console.log(tri.getArea());

// 5. class cheching: instanceOf
console.log(rect instanceof RectAngle); // true
console.log(tri instanceof RectAngle);  // false
console.log(tri instanceof TriAngle);   // true
console.log(tri instanceof Shape);      // true
console.log(tri instanceof Object);     // true