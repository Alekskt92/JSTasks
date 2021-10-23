    'use strict';

    function Student(name, lastName, birthYear) {
        this.name = name;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.presenceList = [];
        this.markList = [];
        this.avgMark = 0;
        this.avgPresence = 0;
    }

    Student.prototype.age = function () {
        let trueAge = 2021 - this.birthYear;
        alert(`Студенту ${this.name} ${this.lastName} ${trueAge} лет`);
    }

    Student.prototype.averageMark = function () {
        let sum = 0;

        for (let i = 0; i < this.markList.length; i++) {
            sum += this.markList[i];
        }

        this.avgMark = sum / 10;
        alert(`Средний балл студента ${this.name} ${this.lastName}: ${this.avgMark}`);
    }

    Student.prototype.averagePresence = function () {
        let count = 0;

        for (let i = 0; i < this.presenceList.length; i++) {
            if (this.presenceList[i] === true) count++;
        }

        this.avgPresence = count / 10;
        alert(`Средняя посещаемость студента ${this.name} ${this.lastName}: ${this.avgPresence}`);
    }

    Student.prototype.present = function () {
        if (this.presenceList.length !== 10) this.presenceList.push(true);
    }

    Student.prototype.absent = function () {
        if (this.presenceList.length !== 10) this.presenceList.push(false);
    }

    Student.prototype.mark = function (value) {
        if (this.markList.length !== 10 && value <= 10) this.markList.push(value);
    }

    Student.prototype.summary = function () {
        if (this.avgMark > 9 && this.avgPresence > 0.9) return 'Вы молодец!';
        if (this.avgMark < 9 && this.avgPresence < 0.9) return 'Редиска!';
        return 'Хорошо, но можно лучше';
    }

    /*console.log(Student.prototype);*/

    let user = new Student('Alex', 'Kutuyev', 2002);
    user.present();
    user.present();
    user.present();
    user.present();
    user.present();
    user.present();
    user.present();
    user.present();
    user.absent();
    user.present();
    user.present();

    user.age();

    user.mark(5);
    user.mark(6);
    user.mark(7);
    user.mark(8);
    user.mark(8);
    user.mark(9);
    user.mark(10);
    user.mark(11);
    user.mark(12);
    user.mark(10);
    user.mark(8);
    user.mark(8);
    user.mark(8);

    console.log(user.presenceList);
    console.log(user.markList);
    user.averageMark();
    console.log(user.avgMark);
    user.averagePresence();
    console.log(user.avgPresence);
    alert(user.summary());

    // User 2
    let studentTest = new Student('Vlad', 'Ivanov', 2001);
    studentTest.absent();
    studentTest.present();
    studentTest.present();
    studentTest.absent();
    studentTest.present();
    studentTest.present();
    studentTest.absent();
    studentTest.present();
    studentTest.absent();
    studentTest.present();
    studentTest.present();

    studentTest.age();

    studentTest.mark(5);
    studentTest.mark(6);
    studentTest.mark(5);
    studentTest.mark(4);
    studentTest.mark(8);
    studentTest.mark(9);
    studentTest.mark(10);
    studentTest.mark(11);
    studentTest.mark(12);
    studentTest.mark(10);
    studentTest.mark(8);
    studentTest.mark(7);
    studentTest.mark(8);

    console.log(studentTest.presenceList);
    console.log(studentTest.markList);
    studentTest.averageMark();
    console.log(studentTest.avgMark);
    studentTest.averagePresence();
    console.log(studentTest.avgPresence);
    alert(studentTest.summary());