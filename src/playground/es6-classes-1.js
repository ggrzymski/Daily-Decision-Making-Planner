// Car
// Make , Model, vin #, getDescription

class Person
{
    constructor(name = 'Anonymous',age = 0)
    {
        this.name = name;
        this.age = age;
    }

    getDescription()
    {
        return `${this.name} is ${this.age} years old.`;
    }

    getGreeting() 
    {
        return `Hi my name is ${this.name}`;
    }
}

class Student extends Person
{
    constructor(name,age,major)
    {
        super(name,age);
        this.major = major;
    }

    getDescription()
    {
        let description = super.getDescription();

        if(this.hasMajor())
        {
            description+=` Their major is ${this.major}`;
        }

        return description;
    }

    hasMajor()
    {
        return !!this.major
    }
}

class Traveler extends Person
{
    constructor(name,age, homeLocation)
    {
        super(name,age);
        this.homeLocation = homeLocation;
    }

    getGreeting()
    {
        if(this.homeLocation)
        {
            return `Hi. I am ${this.name}. I'm visiting from ${this.homeLocation}`;
        }
        else
        {
            return `Hi. I am Gregory Grzymski`;
        }
    }
}

const me = new Traveler('Greg Grzymski', 32, 'River Edge');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());