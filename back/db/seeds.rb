Room.create([
    { name: 'Cameron', price: 45, capacity: 16, setup: "Boardroom"},
    { name: 'Room 7', price: 30, capacity: 6, setup: "Boardroom"},
    { name: 'Munari', price: 65, capacity: 40, setup: "Carre"},
    { name: 'DAX', price: 40, capacity: 6, setup: "Boardroom"},
    { name: 'Artwood', price: 35, capacity: 12, setup: "Optional"},
    { name: 'Rivoli', price: 55, capacity: 10, setup: "Carre"},
    { name: 'Innovation', price: 75, capacity: 35, setup: "Club Room"},])

Timespot.create([
    {hours: "09:00 - 10:00" },
    {hours: "10:00 - 11:00" },
    {hours: "11:00 - 12:00" },
    {hours: "12:00 - 13:00" },
    {hours: "14:00 - 15:00" },
    {hours: "16:00 - 17:00" },
    {hours: "17:00 - 18:00" },
    {hours: "18:00 - 19:00" },
    {hours: "19:00 - 20:00" },])

User.create([
    {fname: "Admin", lname: "Adminyan", email:"admin.adminyan@gmail.com", role:"admin", password:"seedpassword", password_confirmation:"seedpassword"},
    {fname: "User", lname: "Useryan", email:"user.useryan2@gmail.com", role:"premium", password:"seedpassword", password_confirmation:"seedpassword"},
    {fname: "User", lname: "Useryan", email:"user.useryan3@gmail.com", role:"nonmember", password:"seedpassword", password_confirmation:"seedpassword"},
    {fname: "User", lname: "Useryan", email:"user.useryan4@gmail.com", role:"regular", password:"seedpassword", password_confirmation:"seedpassword"},
    {fname: "User", lname: "Useryan", email:"user.useryan5@gmail.com", role:"regular", password:"seedpassword", password_confirmation:"seedpassword"}
])

Desk.create([
    {name: "15a", user_id: 2},
    {name: "5b", user_id: 4},
    {name: "1a", user_id: 5},
])

Booking.create([
    {user_id: 1, room_id: 1, timespot_id: 5, book_date:"2018-12-18T20:00:00.000Z"},
    {user_id: 1, room_id: 1, timespot_id: 3, book_date:"2018-12-18T20:00:00.000Z"},
    {user_id: 1, room_id: 1, timespot_id: 7, book_date:"2018-12-18T20:00:00.000Z"},
    {user_id: 1, room_id: 1, timespot_id: 1, book_date:"2018-12-18T20:00:00.000Z"},
    {user_id: 1, room_id: 1, timespot_id: 2, book_date:"2018-12-18T20:00:00.000Z"},
])