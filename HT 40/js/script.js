    'use strict'

    class Student {
        constructor(name, lastName, birthYear) {
            this.name = name;
            this.lastName = lastName;
            this.birthYear = birthYear;
        }

        presenceList = [];
        markList = [];
        avgMark = 0;
        avgPresence = 0;

        get age() {
            let trueAge = 2021 - this.birthYear;
            alert(`Студенту ${this.name} ${this.lastName} ${trueAge} лет`);
        }

        get averageMark() {
            let sum = 0;

            for (let i = 0; i < this.markList.length; i++) {
                 sum += this.markList[i];
            }

            this.avgMark = sum / 10;
            alert(`Средний балл студента ${this.name} ${this.lastName}: ${this.avgMark}`);
        }

        get averagePresence() {
            let count = 0;

            for (let i = 0; i < this.presenceList.length; i++) {
                if (this.presenceList[i] === true) count++;
            }

            this.avgPresence = count / 10;
            alert(`Средняя посещаемость студента ${this.name} ${this.lastName}: ${this.avgPresence}`);
        }

        present() {
            if (this.presenceList.length !== 10) this.presenceList.push(true);
        }

        absent() {
            if (this.presenceList.length !== 10) this.presenceList.push(false);
        }

        mark(value) {
            if (this.markList.length !== 10 && value <= 10) this.markList.push(value);
        }

        get summary() {
            if (this.avgMark > 9 && this.avgPresence > 0.9) return 'Вы молодец!';
            if (this.avgMark < 9 && this.avgPresence < 0.9) return 'Редиска!';
            return 'Хорошо, но можно лучше';
        }
    }
// User 1
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

    user.age;

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
    user.averageMark;
    console.log(user.avgMark);
    user.averagePresence;
    console.log(user.avgPresence);
    console.log(user.summary);

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

    studentTest.age;

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
    studentTest.averageMark;
    console.log(studentTest.avgMark);
    studentTest.averagePresence;
    console.log(studentTest.avgPresence);
    console.log(studentTest.summary);