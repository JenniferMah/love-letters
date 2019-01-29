console.log("HELP");
$(function(){
  $("#git_photo").on({ mouseenter: function(){
    $(this).attr('src','img/git_o.png');
  },
  mouseleave: function(){
    $(this).attr('src','img/git.png');
  }
  });



  $("#bash_photo").on({ mouseenter: function(){
    $(this).attr('src','img/bash_o.png');
  },
  mouseleave: function(){
    $(this).attr('src','img/bash.png');
  }
  });
  


  $("#github_photo").on({ mouseenter: function(){
    $(this).attr('src','img/github_o.png');
  },
  mouseleave: function(){
    $(this).attr('src','img/github.png');
  }
  });
});