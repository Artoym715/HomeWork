-- create
CREATE TABLE Students (
  Id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  adress TEXT NOT NULL
);

-- insert
INSERT INTO Students VALUES (0001, 'Иван', '28', 'Алматы');
INSERT INTO Students VALUES (0002, 'Елена', '30', 'Астана');
INSERT INTO Students VALUES (0003, 'Сергей', '20', 'Караганда');
INSERT INTO Students VALUES (0004, 'Юлия', '40', 'Астана');

-- fetch 
SELECT * FROM Students WHERE adress = 'Астана';
