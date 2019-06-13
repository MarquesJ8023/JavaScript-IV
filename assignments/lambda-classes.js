// CODE here for your Lambda Classes

class Person {
    constructor(attrs) {
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;        
    }
    speak(attrs) {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor (attrs) {
        super(attrs);
        this.specialty = attrs.specialty;
        this.favLanguage = attrs.favLanguage;
        this.catchPhrase = attrs.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(attrs) {
        super(attrs);
        this.background = attrs.background;
        this.className = attrs.className;
        this.favSubject = attrs.favSubject;
    }
    listsSubjects() {
        this.favSubjects.forEach(element => console.log(element));
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge() {
      return `${this.name} has begun sprint challenge on ${subject}`;

    }
}

class ProjectManager extends Instructor {
    constructor (attrs) {
        super(attrs);
        this.gradClassName = attrs.gradClassName;
        this.favInstructor = attrs.favInstructor;
    };

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const marques = new Student({
    name: 'Marques',
    age: 37,
    location: 'Orlando',
    background: 'Nomad',
    className: 'Web21',
    favSubjects: ['Python', 'Javascript', 'Pentesting'],
    grade: Math.floor(Math.random() * 101) + 1,
});

marques.listsSubjects();
