var userModel = {};

var userCollection = [];

var userTemplate = {
  tittle:"",
  URL:"",
  thumbUrl:"",
  userID:'',
  Album: ""
}

userModel.getAll = ()=>{
  return userCollection;
}

userModel.getById = (id)=>{
  var filteredUsers = userCollection.filter(
    (o)=>{
      return o.userID === id;
    }
  );
  
  if(filteredUsers.length){
    return filteredUsers[0];
  }else{
    return null
  }
}

userModel.addNew = ({ tittlee, UR, thumb,albm }  )=>{
  var newUser = Object.assign(
    {},
    userTemplate,
    {
      tittle: tittlee,
      URL: UR,
      thumbUrl: thumb,
        Album: albm
    }
  );
  newUser.userID = userCollection.length + 1;

  userCollection.push(newUser);
  return newUser;
}

userModel.update = (id, { UR, thumb })=>{
 var updatingUser = userCollection.filter(
   (o, i)=>{
     return o.userID === id;
   }
 );



 if(updatingUser && updatingUser.length>0){
   updatingUser = updatingUser[0];
 } else {
   return null;
 }


 var updateUser = {};
 var newUpdatedCollection = userCollection.map(
   (o, i)=>{

     if(o.userID === id){
       updateUser = Object.assign({},
          o,
         { URL: UR, thumbUrl:thumb}
       );
       return updateUser;
     }else{
       return o;
     }
   }
 );
  userCollection = newUpdatedCollection;
  return updateUser;
}





userModel.deleteByCode=(id)=>{
  var newColletion= [];
  newCollection =userCollection.filter(
    (o)=>{
      return o.userID !==id;
    }
  );
  userColletion = newCollection;
  return true;
}






userCollection.push(
  Object.assign(
    {},
    userTemplate,
    {
      tittle:"Epoca Navideña",
      URL: "//http:/navidad/epoca",
      thumbUrl: "//epoca/",
      userID: 1,
      Album: "GaleriaShop"
    }
  )
);



userCollection.push(
  Object.assign(
    {},
    userTemplate,
    {
        tittle:"Epoca Espiritual",
        URL: "//http:/espiritual/epoca",
        thumbUrl: "//epoca/",
        userID: 1,
        Album: "Gal"
    }
  )
);
 // new Date(timestamp)


module.exports = userModel;
