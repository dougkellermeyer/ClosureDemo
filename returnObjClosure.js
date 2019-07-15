function secret(data){
    return {
        setData: function(){console.log('password of ' + data + ' has been set')},
        getData: function(){console.log('data retrieved')}
    }
  };
  
// var savePassword = secret().setData()
// savePassword() // not a function

secret('qwerty').setData()

