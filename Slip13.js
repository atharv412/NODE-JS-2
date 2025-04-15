// import mysql from'node_modules/@types/mysql/index'

import mysql from 'mysql2';

const con=mysql.createConnection({
    user:"root",
    password:"root"
});

con.connect(err=>{
    if(err) throw err

    const sql="create database studentDB;"
    con.query(sql,(err,res)=>{
        if(err) throw err
        console.log(`${res.affectedRows} table created`);
    })

    con.query("create table studentDB.student(rno int, sname varchar(40), percentage int )",(err,res)=>{
        if(err) throw err
        console.log(`${res.affectedRows} record inserted `);
    })
    // con.query("UPDATE student SET percentage = 90 WHERE rno = 1")

    con.end(()=>{
        if(err) throw err
        console.log(`connection closed`);
    })
})