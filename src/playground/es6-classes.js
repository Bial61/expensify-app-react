class Person 
{
    name='bilal'
    get = () =>
    {
        console.log(this.name)
    }
}

class Student extends Person 
{
    constructor(name,age,major)
    {
        super(name,age)
        this.major=major   

    }
}

const me= new Person();
me.get()
// const me= new Student('Bugati','420kp/h','');
// console.log(me)