// var allStudents = []
// function submit() {
//     var firstname = document.getElementById('firstname').value
//     var lastname = document.getElementById('lastname').value
//     var mailphone = document.getElementById('mailphone').value
//     var password = document.getElementById('password').value

//     if (firstname === '' || lastname === '' || mailphone === '' || password === '') {
//         alert("haba, haba, you no dey see")
//     } else {
//     }
// }

// var studentObj = {firstname,lastname,mailphone,password}
// allStudents.push(studentObj)
// console.log(allStudents);

// document.getElementById('firstname').value = ''
// document.getElementById('lastname').value = ''
// document.getElementById('mailphone').value = ''
// document.getElementById('password').value = ''
var allStudents = []
function submit() {
    var firstname = document.getElementById('firstname').value
    var lastname = document.getElementById('lastname').value
    var mailphone = document.getElementById('mailphone').value
    var password = document.getElementById('password').value

    if (firstname === '' || lastname === '' || mailphone === '' || password === '') {
        emptyErrorMessage.style.display = 'block'
        setTimeout(() => {
            emptyErrorMessage.style.display = 'none'
        }, 5000);
    } else {
        var studentObj = {firstname,lastname,mailphone,password}
        var pushedStudent = allStudents.push(studentObj)
        if(pushedStudent) {
            successMessage.style.display = 'block'
            displayCart()
            setTimeout(()=>{
            successMessage.style.display = 'none'

            }, 3000)
        } else {
            alert('failed to submit')
        }
        console.log(allStudents);
    
        document.getElementById('firstname').value = ''
        document.getElementById('lastname').value = ''
        document.getElementById('mailphone').value = ''
        document.getElementById('password').value = ''
    }

}
function displayCart() {
    show.innerHTML = ''

show.innerHTML  += `<tr>
            <th>S/N</th>
            <th>Items</th>
            <th>Action</th>
               </tr>`

               for(i = 0; i < allStudents.length; i++){
        // var element = studentObj[i]
        show.innerHTML += `<tr>
        <td${i + 1}</td> 
        <td${allStudents[i].firstname}</td> 
        <td${allStudents[i].lastname}</td> 
        <td${allStudents[i].mailphone}</td> 
        <td><button class = "btn btn-danger btn-sm" onclick="del(${i})">Delete</button>
        <button  class="btn btn-warning btn-sm">Edit</button></td>
        </tr>
        `
    }
    }

