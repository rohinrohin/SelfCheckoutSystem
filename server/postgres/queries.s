--INSERT INTO CART
INSERT INTO ORDER_DETAILS VALUES({ORDER_ID},{U_ID},{P_ID},{P_QTY},{EXPENSE});

--REMOVE FROM CART
DELETE FROM ORDER_DETAILS WHERE P_ID = '{P_ID}';

--UPDATE CART QTY
UPDATE ORDER_DETAILS SET P_QTY = {P_QTY};

-- SELECT PRODUCT BELONGING TO {CATEGORY}
SELECT * FROM PRODUCTS WHERE C_ID = 'BIS';

-- SELECT CATEGORIES HAVING MULTIPLE PRODUCTS
SELECT C_ID FROM PRODUCTS GROUP BY C_ID HAVING COUNT(C_ID) > 1;

--DISPLAY ONLY THE PRODUCTS AND THE CATEGORY TO WHICH THEY BELONG
SELECT P_NAME,C_NAME FROM PRODUCTS,CATEGORIES WHERE PRODUCTS.C_ID = CATEGORIES.C_ID;

--Hard queries
--SELECT PRODUCTS THAT CUSTOMER HAS ORDERED WHICH HAVE A DISCOUNT
SELECT P_ID,EXPENSE FROM ORDER_DETAILS WHERE P_ID IN (SELECT P_ID FROM PRODUCTS WHERE DISCOUNT > 0);

--EXTRA 10% DISCOUNT TO MASTERCARD USERS
UPDATE ORDERS SET TOTAL_AMOUNT = 0.9 * TOTAL_AMOUNT WHERE U_ID IN (SELECT U_ID FROM USES WHERE METHOD = 'MASTERCARD');

--UPDATING STOCK EVERYTIME PRODUCTS ARE ADDED TO CART
UPDATE PRODUCTS SET STOCK = STOCK - P_QTY FROM ORDER_DETAILS WHERE PRODUCTS.P_ID = ORDER_DETAILS.P_ID;

--DISPLAY DETAILS OF AN ORDER
SELECT P.P_ID,P_NAME,P_URL,PRICE FROM PRODUCTS P,ORDER_DETAILS O WHERE P.P_ID = O.P_ID AND ORDER_ID = 'ORDER1'; 

--COMPLETE TRANSACTION
UPDATE ORDERS SET ORDER_STATUS = 'PAYED' WHERE ORDER_ID = '{ORDER_ID}';

--ADD NEW CARD
INSERT INTO ACCOUNTING VALUES('{METHOD}','{ACC_NO}','{ACC_PWD}');
INSERT INTO USES VALUES('{U_ID}','{METHOD}','{ACC_NO}');

--DISPLAY TRANSACTION HISTORY
SELECT * FROM ORDERS WHERE ORDER_STATUS = 'PAYED' AND U_ID = '{U_ID}';

--SEARCH FOR PRODUCT
SELECT P_NAME,PRICE,P_URL,STOCK,DISCOUNT FROM PRODUCTS WHERE P_NAME LIKE '%{STR}%';

--TOTAL AMOUNT BEFORE DISCOUNT
SELECT SUM(PRICE*P_QTY) FROM ORDER_DETAILS,PRODUCTS WHERE ORDER_ID = '{ORDER_ID}' AND ORDER_DETAILS.P_ID = PRODUCTS.P_ID;     --STORE THIS IN A VARIABLE


--TOTAL AMOUNT AFTER DISCOUNT
WITH TOT AS (select sum(price*p_qty*(1-discount/100)) from order_details,products where order_id = 'order1' and order_details.p_id = products.p_id) UPDATE ORDERS SET TOTAL_AMOUNT = (SELECT SUM FROM TOT) WHERE ORDER_ID = 'order3';


--CREATING CART
INSERT INTO ORDERS(ORDER_ID,ORDER_STATUS,U_ID,ORDER_DATE) VALUES('{ORDER_ID}','CART','{U_ID}','{DATE}');
