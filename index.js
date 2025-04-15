

export function fact (x) {
    const a=x;
    let sum=1;
    for (let i = 1; i <= x; i++) {
        sum *=i        
    }
    // console.log(sum);
    return sum
}

export function nameCalcAge(fname,lname,dob)
{
    const fullName=fname+lname
    const d=new Date
    const currentAge=d.getFullYear()-dob;
return [fullName,currentAge]
} 

export function validateEmpDetails(joinDate){
    const d=new Date
    // const jDate=joinDate.split('/')
// console.log(joinDate);

    // let dateOfBirth;
    if(joinDate[0]<=31  &&joinDate[1]<=12 && joinDate[2]<=d.getFullYear()){
        // dateOfBirth=dob
        return 'status ok'
    }else{
        return `check join date ${joinDate}`
    }
}