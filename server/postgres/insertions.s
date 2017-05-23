\c scstest
--INSERT INTO CATEGORIES VALUES( {C_ID},{C_NAME} );
INSERT INTO CATEGORIES VALUES('DET','DETERGENTS');    
INSERT INTO CATEGORIES VALUES('BIS','BISCUITS');    
INSERT INTO CATEGORIES VALUES('SD','SOFT DRINKS');   
INSERT INTO CATEGORIES VALUES('CER','CEREALS'); 
INSERT INTO CATEGORIES VALUES('RTE','READY TO EAT');
INSERT INTO CATEGORIES VALUES('FJ','FRUIT JUICES');
INSERT INTO CATEGORIES VALUES('HC','HEALTHCARE');
 

-- INSERT INTO PRODUCTS VALUES( {P_ID},{P_NAME},{PRICE},{P_URL},{C_ID},{STOCK},{DISCOUNT} );
INSERT INTO PRODUCTS VALUES('9780141339092','SURF EXCEL',50,'rohin.me/img/surf_excel.jpg','DET',10,5); 
INSERT INTO PRODUCTS VALUES('4823800883536','OREO',20,'rohin.me/img/oreo_vanilla.jpg','BIS',20,5); 
INSERT INTO PRODUCTS VALUES('6354812727362','COCA COLA 250ml',30,'rohin.me/img/coke_bottle.jpg','SD',30,5);
INSERT INTO PRODUCTS VALUES('7236489374623','PEPSI',30,'rohin.me/img/pepsi_bottle.jpg','SD',30,5);
INSERT INTO PRODUCTS VALUES('4876342461623','TROPICANA',20,'rohin.me/img/tropicana_100.jpg','FJ',40,5);
INSERT INTO PRODUCTS VALUES('3854738971221','CHOCOS',120,'rohin.me/img/chocos.jpg','CER',30,5);
INSERT INTO PRODUCTS VALUES('1298476783451','CORN FLAKES',100,'rohin.me/img/corn_flakes.jpg','CER',30,5);
INSERT INTO PRODUCTS VALUES('9834767835423','BOURBON',15,'rohin.me/img/bourbon.jpg','BIS',50,5);
INSERT INTO PRODUCTS VALUES('3236127283641','PONDS',80,'rohin.me/img/ponds.jpg','HC',15,5);
INSERT INTO PRODUCTS VALUES('7612531253132','TIDE',60,'rohin.me/img/tide.jpg','DET',10,5);
INSERT INTO PRODUCTS VALUES('7812548763123','MINUTE MAID',20,'rohin.me/img/minute_maid_250.jpg','FJ',40,5);



-- INSERT INTO LOCATIONS VALUES( {L_ID},{FLOOR},{ISLE_NO} );
INSERT INTO LOCATIONS VALUES('L-01',1,1);    
INSERT INTO LOCATIONS VALUES('L-02',1,2);    
INSERT INTO LOCATIONS VALUES('L-03',1,3);   
INSERT INTO LOCATIONS VALUES('L-04',1,4);    
INSERT INTO LOCATIONS VALUES('L-05',1,5);    
INSERT INTO LOCATIONS VALUES('L-06',2,1);
INSERT INTO LOCATIONS VALUES('L-07',2,2);    
INSERT INTO LOCATIONS VALUES('L-08',2,3);    
INSERT INTO LOCATIONS VALUES('L-09',2,4);
INSERT INTO LOCATIONS VALUES('L-10',2,5);    
INSERT INTO LOCATIONS VALUES('L-11',3,1);    
INSERT INTO LOCATIONS VALUES('L-12',3,2);
INSERT INTO LOCATIONS VALUES('L-13',3,3);    
INSERT INTO LOCATIONS VALUES('L-14',3,4);    
INSERT INTO LOCATIONS VALUES('L-15',3,5);
INSERT INTO LOCATIONS VALUES('L-16',4,1);    
INSERT INTO LOCATIONS VALUES('L-17',4,2);    
INSERT INTO LOCATIONS VALUES('L-18',4,3);
INSERT INTO LOCATIONS VALUES('L-19',4,4);    
INSERT INTO LOCATIONS VALUES('L-20',4,5);    
INSERT INTO LOCATIONS VALUES('L-21',5,1);
INSERT INTO LOCATIONS VALUES('L-22',5,2);    
INSERT INTO LOCATIONS VALUES('L-23',5,3);    



--INSERT INTO USERS VALUES( {U_ID},{U_NAME},{GENDER},{AGE},{U_ADDRESS} );
insert into users (u_id, u_name, gender, age, u_address) values ('rohin', 'Rohin Gopalakrishnan', 'Male', 1, '58 Gale Crossing');
insert into users (u_id, u_name, gender, age, u_address) values ('mkelley0', 'Mark Kelley', 'Male', 1, '58 Gale Crossing');
insert into users (u_id, u_name, gender, age, u_address) values ('rgardner1', 'Robert Gardner', 'Male', 2, '05 Dayton Hill');
insert into users (u_id, u_name, gender, age, u_address) values ('kbarnes2', 'Kimberly Barnes', 'Female', 3, '798 Truax Hill');
insert into users (u_id, u_name, gender, age, u_address) values ('trussell3', 'Thomas Russell', 'Male', 4, '9974 Vermont Alley');
insert into users (u_id, u_name, gender, age, u_address) values ('cpowell4', 'Christopher Powell', 'Male', 5, '2499 Carpenter Alley');
insert into users (u_id, u_name, gender, age, u_address) values ('creed5', 'Carlos Reed', 'Male', 6, '3 Loomis Place');
insert into users (u_id, u_name, gender, age, u_address) values ('rhansen6', 'Richard Hansen', 'Male', 7, '94 Longview Lane');
insert into users (u_id, u_name, gender, age, u_address) values ('rmills7', 'Rose Mills', 'Female', 8, '86370 Dottie Alley');
insert into users (u_id, u_name, gender, age, u_address) values ('lchavez8', 'Linda Chavez', 'Female', 9, '244 David Point');
insert into users (u_id, u_name, gender, age, u_address) values ('rross9', 'Robin Ross', 'Female', 10, '4 Schmedeman Street');
insert into users (u_id, u_name, gender, age, u_address) values ('wmorrisa', 'Wanda Morris', 'Female', 11, '2 Parkside Crossing');
insert into users (u_id, u_name, gender, age, u_address) values ('lwagnerb', 'Lillian Wagner', 'Female', 12, '6598 International Avenue');
insert into users (u_id, u_name, gender, age, u_address) values ('eperryc', 'Evelyn Perry', 'Female', 13, '11 Toban Drive');
insert into users (u_id, u_name, gender, age, u_address) values ('lhunterd', 'Lawrence Hunter', 'Male', 14, '026 Sugar Point');
insert into users (u_id, u_name, gender, age, u_address) values ('rramose', 'Russell Ramos', 'Male', 15, '6556 Hooker Court');
insert into users (u_id, u_name, gender, age, u_address) values ('lwellsf', 'Lois Wells', 'Female', 16, '55403 Bluestem Plaza');
insert into users (u_id, u_name, gender, age, u_address) values ('pevansg', 'Paul Evans', 'Male', 17, '3325 Talmadge Lane');
insert into users (u_id, u_name, gender, age, u_address) values ('awilliamsonh', 'Ann Williamson', 'Female', 18, '2 Buena Vista Parkway');
insert into users (u_id, u_name, gender, age, u_address) values ('jhendersoni', 'Julia Henderson', 'Female', 19, '874 Carey Center');
insert into users (u_id, u_name, gender, age, u_address) values ('spiercej', 'Susan Pierce', 'Female', 20, '587 Mallard Drive');



--INSERT INTO LOGIN VALUES( {U_ID},{PASSWORD},{EMAIL} );
insert into login (u_id, password, email) values ('rohin', 'rohin', 'adcruz0@miibeian.gov.cn');
insert into login (u_id, password, email) values ('mkelley0', 'AxXREQlKu', 'dcruz0@miibeian.gov.cn');
insert into login (u_id, password, email) values ('rgardner1', 'am7CrbEe030', 'rbanks1@de.vu');
insert into login (u_id, password, email) values ('kbarnes2', '1hUxLGZ', 'jrichardson2@live.com');
insert into login (u_id, password, email) values ('trussell3', 'LSJ1vZsjNop', 'lfox3@shutterfly.com');
insert into login (u_id, password, email) values ('cpowell4', 'LKn3iB', 'pgardner4@virginia.edu');
insert into login (u_id, password, email) values ('creed5', 'xprnCrj6eq', 'lwatkins5@goodreads.com');
insert into login (u_id, password, email) values ('rhansen6', 'DFMiNdzdTS1Y', 'fflores6@mozilla.com');
insert into login (u_id, password, email) values ('rmills7', 'Fxlngl', 'eduncan7@uiuc.edu');
insert into login (u_id, password, email) values ('lchavez8', 'jrfSgb12Rz3', 'preid8@wikipedia.org');
insert into login (u_id, password, email) values ('rross9', '0hXvzoZs', 'bhernandez9@unicef.org');
insert into login (u_id, password, email) values ('wmorrisa', 'y9BIFxedGZ8j', 'padamsa@berkeley.edu');
insert into login (u_id, password, email) values ('lwagnerb', 'Nf5KBMkIUNHC', 'mstewartb@dot.gov');
insert into login (u_id, password, email) values ('eperryc', 'uUhXvNWACKmU', 'kwatkinsc@illinois.edu');
insert into login (u_id, password, email) values ('lhunterd', 'kSKYRvBXyJN9', 'lwashingtond@addtoany.com');
insert into login (u_id, password, email) values ('rramose', '3bcV4dxb4fB', 'nboyde@cbslocal.com');
insert into login (u_id, password, email) values ('lwellsf', 'nH7pAjNOCpNu', 'kmorrisonf@adobe.com');
insert into login (u_id, password, email) values ('pevansg', 'uRqNFF', 'vreyesg@ehow.com');
insert into login (u_id, password, email) values ('awilliamsonh', 'AjezbCW', 'ebennetth@dailymotion.com');
insert into login (u_id, password, email) values ('jhendersoni', 'HnFKyAFhRcB', 'awebbi@google.cn');
insert into login (u_id, password, email) values ('spiercej', 'PO97o0R', 'dgarzaj@godaddy.com');


--INSERT INTO SUPPLIERS VALUES( {S_ID},{S_NAME},{S_ADDRESS} );
insert into suppliers (s_id, s_name, s_address) values ('s1', 'Quire', '83883 Roxbury Road');
insert into suppliers (s_id, s_name, s_address) values ('s2', 'Fadeo', '315 Ronald Regan Hill');
insert into suppliers (s_id, s_name, s_address) values ('s3', 'Zooveo', '8126 Hoepker Drive');
insert into suppliers (s_id, s_name, s_address) values ('s4', 'Skaboo', '77 Artisan Street');
insert into suppliers (s_id, s_name, s_address) values ('s5', 'Yakijo', '45024 Sachs Street');
insert into suppliers (s_id, s_name, s_address) values ('s6', 'Yodel', '2 Pennsylvania Place');
insert into suppliers (s_id, s_name, s_address) values ('s7', 'Skimia', '960 Hanson Court');
insert into suppliers (s_id, s_name, s_address) values ('s8', 'Vipe', '985 Huxley Road');
insert into suppliers (s_id, s_name, s_address) values ('s9', 'Twimbo', '25998 Moulton Street');
insert into suppliers (s_id, s_name, s_address) values ('s10', 'Chatterpoint', '164 Mifflin Pass');
insert into suppliers (s_id, s_name, s_address) values ('s11', 'Voonyx', '390 Gateway Way');
insert into suppliers (s_id, s_name, s_address) values ('s12', 'Youopia', '1 Badeau Street');
insert into suppliers (s_id, s_name, s_address) values ('s13', 'Kanoodle', '39 Warrior Drive');
insert into suppliers (s_id, s_name, s_address) values ('s14', 'Eabox', '50 Truax Road');
insert into suppliers (s_id, s_name, s_address) values ('s15', 'Yodo', '67474 Mesta Avenue');
insert into suppliers (s_id, s_name, s_address) values ('s16', 'Yakitri', '54 Del Mar Avenue');
insert into suppliers (s_id, s_name, s_address) values ('s17', 'Innojam', '2649 Scott Alley');
insert into suppliers (s_id, s_name, s_address) values ('s18', 'Dazzlesphere', '3375 Paget Circle');
insert into suppliers (s_id, s_name, s_address) values ('s19', 'Roomm', '134 Artisan Avenue');
insert into suppliers (s_id, s_name, s_address) values ('s20', 'Vinder', '5368 Kensington Avenue');


--INSERT INTO ACCOUNTING VALUES( {METHOD},{ACC_NO},{ACC_PWD} );
insert into accounting (method, acc_no, acc_pwd) values ('maestro', '0604811467900874', 'pAxv6u3X2yB');
insert into accounting (method, acc_no, acc_pwd) values ('jcb', '3544300399454751', 'NC5ObjiiTvz');
insert into accounting (method, acc_no, acc_pwd) values ('diners-club-carte-blanche', '30022433254552', 'yTGLOghGVX');
insert into accounting (method, acc_no, acc_pwd) values ('switch', '4903242864577216', 'OdckvazfAsv');
insert into accounting (method, acc_no, acc_pwd) values ('diners-club-enroute', '201907412746037', 'RJ9Z2igiW4Q2');
insert into accounting (method, acc_no, acc_pwd) values ('mastercard', '5125335218733672', 'tr8TW1YrGh');
insert into accounting (method, acc_no, acc_pwd) values ('visa-electron', '4508334013926821', 'I4Gs4ol');
insert into accounting (method, acc_no, acc_pwd) values ('jcb', '3560496708405978', 'b69LjAT0lVCM');
insert into accounting (method, acc_no, acc_pwd) values ('jcb', '3570385411802985', 'rOvOxdd4wz');
insert into accounting (method, acc_no, acc_pwd) values ('bankcard', '5602231503136519', 'ZnSg3LBbbSV');
insert into accounting (method, acc_no, acc_pwd) values ('instapayment', '6374589452050591', 'dlmbVp4');
insert into accounting (method, acc_no, acc_pwd) values ('maestro', '67629022825507548', 'WJGM3ECS');
insert into accounting (method, acc_no, acc_pwd) values ('diners-club-carte-blanche', '30051061059645', 'CvicZbOE');
insert into accounting (method, acc_no, acc_pwd) values ('jcb', '3543224540448937', 'wJ0NTEHh7rD');
insert into accounting (method, acc_no, acc_pwd) values ('visa-electron', '4917800663457346', 'eoIf3Nwic');
insert into accounting (method, acc_no, acc_pwd) values ('maestro', '5038690567697647', 'fXg1Li');
insert into accounting (method, acc_no, acc_pwd) values ('jcb', '3554827917095416', 'TbETbt8a2a');
insert into accounting (method, acc_no, acc_pwd) values ('visa-electron', '4405180550176278', 'B2BAUwz');
insert into accounting (method, acc_no, acc_pwd) values ('jcb', '3552062722794142', '5UCR8V0jXNJ');
insert into accounting (method, acc_no, acc_pwd) values ('visa-electron', '4026904534323857', 'r5BmTaIC');

-- MAKE A NEW ORDER. 
--INSERT INTO ORDERS VALUES( {ORDER_ID},{ORDER_STATUS},{U_ID},{TOTAL_AMOUNT},{ORDER_DATE} );
--insert into orders values('order1','CART','mkelley0',440,'2017-3-21');
--insert into orders values('order2','PAYED','mkelley0',440,'2017-3-21');

--ADD PRODUCTS TO ORDER
--INSERT INTO ORDER_DETAILS VALUES( {ORDER_ID},{U_ID},{P_ID},{P_QTY},{EXPENSE} );
--insert into order_details values ('order1','mkelley0','4823800883536',10,40);
--insert into order_details values ('order1','mkelley0','6354812727362',5,30);
--insert into order_details values ('order1','mkelley0','3854738971221',6,240);
--insert into order_details values ('order1','mkelley0','3236127283641',8,80);

--insert into uses values('mkelley0','mastercard', '5125335218733672');

