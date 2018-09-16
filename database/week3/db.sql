DROP database IF EXISTS new_library;
CREATE database new_library;
USE new_ibrary;
/*Data for the table book_details */
CREATE TABLE book_details(
    id INT NOT NULL AUTO_INCREMENT,
    book_name VARCHAR(200) NOT NULL,
    book_pages VARCHAR(200) NOT NULL,
    book_category VARCHAR(200) NOT NULL,
    book_isbn VARCHAR(200) NOT NULL,
    book_author VARCHAR(200) NOT NULL,
    book_publication VARCHAR(200) NOT NULL,
    book_edition VARCHAR(200) NOT NULL,
    PRIMARY KEY (id)
);
/*Data for the table `book_details` */
INSERT INTO book_details(id,book_name,book_pages,book_category,book_isbn,book_author,book_publication,book_edition) values(1,'Hamlet',500,'novel',76542345,'Skakespeare','American','2');
INSERT INTO book_details(id,book_name,book_pages,book_category,book_isbn,book_author,book_publication,book_edition) values(2,'The Wonky Donkey' ,300,'child book',122345,'Craig Smilth','Scholastic,INC','1');
INSERT INTO book_details(id,book_name,book_pages,book_category,book_isbn,book_author,book_publication,book_edition) values(3,'Girl Wash your face' ,240,'novel',209867,'Rachel Hollis','Nelson, Thomas, Inc','1');
/*Table structure for table issue_book */

DROP TABLE IF EXISTS issue_book;
CREATE TABLE issue_book(
    book_user_id VARCHAR(200) NOT NULL,
    book_id VARCHAR(200) NOT NULL,
    issue_date VARCHAR(200) NOT NULL,
    renual_date VARCHAR(200) NOT NULL,
    PRIMARY KEY (id)
);
/*Data for the table `issue_book` */

INSERT INTO issue_book(book_user_id,book-id,issue_book,renual_date) value('AB01','001','12/09/2018','18/09/2018');

INSERT INTO issue_book(book_user_id,book-id,issue_book,renual_date) value('29ONM','12','11/09/2018','12/10/2018');

INSERT INTO issue_book(book_user_id,book-id,issue_book,renual_date) value('GHJ121','234','15/09/2018','22/09/2018');

/*Table structure for table `user` */

DROP TABLE IF EXISTS user;
CREATE TABLE user;
id INT NOT NULL AUTO_INCREMENT,
username VARCHAR(200) NOT NULL,
pwd VARCHAR(200) NOT NULL,
 PRIMARY KEY (id)
 );
 /*Data for the table `user` */
 INSERT INTO user(id,username,pwd) value(1,'John Lehnon','sleepingbear');
 INSERT INTO user(id,username,pwd) value(2,'Kristine Perry','coffelover');
 INSERT INTO user(id,username,pwd) value(3,'Peter Gustavson','bookbuggy');

