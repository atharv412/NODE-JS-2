import myql from 'mysql2'





const con=myql.createConnection({
    user:"root",
    password:"root",
    database:"atharva"
})

con.connect(err=>{
    if(err) throw err

    // const tempsql="create table employee(eno int, ename varchar(40), salary int );"
    // con.query(tempsql,(err,res)=>{
    //     if(err) throw err
    //     console.log(`${res.affectedRows} table created`);
    // })

    con.query("insert into employee values(1,'zxcv',100);",(err,res)=>{
        if(err) throw err
        console.log(`${res.affectedRows} record inserted`);
    })
    con.query("insert into employee values(2,'zxcv',10000);",(err,res)=>{
        if(err) throw err
        console.log(`${res.affectedRows} record inserted`);
    })
    let sql=`update employee set salary =20000 where eno=2`
    con.query(sql,(err,res)=>{
        if(err) throw err
        console.log(`${res.affectedRows} table updated`);
    })

    con.end(()=>{
        if(err) throw err
        console.log(`connection closed`);
    })
})