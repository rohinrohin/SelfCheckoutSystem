drop database SCSTEST;
create database SCSTEST;
\c scstest

create table categories(
c_id varchar(8),
c_name varchar(20),
primary key(c_id));

create table products(
p_id varchar(20),
p_name varchar(20),
price integer,
p_url varchar(100),
c_id varchar(8),
stock integer,discount float,
primary key(p_id),
foreign key(c_id) references categories
);

create table users(
u_id varchar(15),
u_name varchar(20),
gender varchar(8),age integer, u_address varchar(50),primary key(u_id)
);

create table suppliers(
s_id varchar(8),
s_name varchar(20),
s_address varchar(50),                          
primary key(s_id));



create table login(
u_id varchar(15) primary key,
password varchar(12),
email varchar(50),
foreign key(u_id) references users(u_id));

create table locations(
l_id varchar(8) primary key,
floor integer,
isle_no integer);

create table accounting(
method varchar(50),
acc_no varchar(30),
acc_pwd varchar(12),
primary key(method,acc_no));

create table belongs_to(
p_id varchar(20),
c_id varchar(8),
foreign key(p_id) references products,
foreign key(c_id) references categories,primary key(p_id));

create table supplied_by(
p_id varchar(20),
s_id varchar(8),
foreign key(p_id) references products,
foreign key(s_id) references suppliers,primary key(p_id));

create table order_details(
order_id varchar(8),
u_id varchar(15),
p_id varchar(20),
p_qty integer,
expense integer,
primary key(order_id,p_id),
foreign key(u_id) references users,
foreign key(p_id) references products
);

create table orders(
order_id varchar(8) primary key,
order_status varchar(10),
u_id varchar(15),
total_amount integer,
order_date date);

create table placed_at(
p_id varchar(20),
l_id varchar(8),
foreign key(p_id) references products,
foreign key(l_id) references locations,
primary key(p_id,l_id));

create table uses(
u_id varchar(15),
method varchar(50),
acc_no varchar(30),
foreign key(method,acc_no) references accounting
);
