$( document ).ready( function() {
       


       var command_directory = {
         
          'whois': function( tokens ) {
           tokens.length
           var dirname = tokens[1];
           if(tokens.length == 1 || dirname == ''){
               return 'Unavailable format.<br>Example: \'whois 王子天\' (\'whois ChineseName\')<br> Example: \'whois WangZitian\' (\'whois LastnameFirstname\')<br>Or both<br>I only have very few people here. If you are missed, do remind me.';
           }else{
              switch (dirname){
                  case 'YangZiwei':
                  return 'Hey younger sister!';
                  break;
                  
                  case 'WangIshi':
                  return 'Hey younger sister!';
                  break;
                  
                  case 'WeiEd':
                  return 'My awesome boss, who gives up an awesome job and runs another awesome business by himself now!';
                  break;
                  
                  case 'SituPing':
                  return 'A super nice person! Thank God for letting me know you!';
                  break;
                  
                  case '李响':
                  return '这个世界上最好的朋友，她在我心里的位置不可能被超越';
                  break;
                  
                  case '李欣蔚':
                  return '多欣慰啊！最好的朋友！准备以后弄点啥，玩死小苹果';
                  break;
                  
                  case 'LiXiang':
                  return 'My best friend around this world. No one will beat her. No one will beyond her. I will never ever love anyone same as her';
                  break;
 
                  case 'LiXinwei':
                  return 'My best friend. We will run some businesses or games to beat Apple, Microsoft, Google or any company you know';
                  break;
                  
                  case 'YangChunkai':
                  return 'My classmate and friend, aka Matthew, who studies Software Engineering in University of Waterloo. Unbelievable learning ability and strong skill in academic';
                  break;
                  
                  case 'YangMatthew':
                  return 'My classmate and friend, aka Chunkai, who studies Software Engineering in University of Waterloo. Unbelievable learning ability and strong skill in academic';
                  break;
                  
                  case 'LinTony':
                  return 'My classmate and friend who studies Software Engineering in University of Waterloo. He loves NHL(hockey). He will be a great software engineer in the future';
                  break;
                  
                  case 'TanLizhi':
                  return 'One of my best friends in Canada! Very nice person that no one will beat. I spent tons of nights with him and his family, Lily and two super cute girls';
                  break;
                  
                  case 'TanRichard':
                  return 'My best friend in Canada! Very nice person that no one will beat. I spent tons of nights with him and his family, Lily and two super cute girls';
                  break;
                  
                  case 'ChanKam':
                  return 'One of my best best best best best friend in this world! She is an angle from God, a bright sunshine for me. Love you!';
                  break;
                  
                  case 'HuangYudian':
                  return 'My super cute antie! She is my best friend thoughout my childhood and teenhood and maybe my adulthood! Love you!!!';
                  break;
                  
                  case 'GaoXin':
                  return 'Awesome uncle Gao! He is a genius and my model and master in academic and being a human.';
                  break;
                    
                    
                    case 'ChengLeilei':
                    return 'Leilei is so nice and warmhearted!!';
                    break;
                  
                    
                    case 'DixonChad':
                    return 'Chad is a COOL man! I hope I could travel with you sometime in the future!!';
                    break;
                    
                    
                  case 'WangZiqi':
                  return 'I do have a wonderful oldersister, WangZiqi! She is AWESOME and never will be beat!!';
                  break;
                  
                  case '王子琪':
                  return '我老姐！老姐等我去找你玩啊啊啊啊！最亲的人有木有！';
                  break;
                  
                  case 'LiangDanni':
                  return 'My first girlfriend and my first love.';
                  break;
                  
                  case '梁丹妮':
                  return '初恋，不知道是不是初恋的美好，但这是我不会忘记的一段感情。';
                  break;
                    
                    case '梁雪':
                    return '我最可爱的小妹妹~南开的日语路走累了，加拿大等你玩~';
                    break;
                    
                    case 'LiangXue':
                    return 'My lovely sister~';
                    break;
                  
                    case '孟淩':
                    return '最美丽的邂逅，天津的美和你遥相呼应，让我心醉。';
                    break;
                    
                    case 'MengLynne':
                    return 'A suprise, a destination.';
                    break;
                  
                  case 'JobsSteve':
                  return 'Apple. I love industrial designs of Apple.';
                  break;
                  
                  case 'WangZitian':
                  return 'It\'s me! But I guess you have already known that!';
                  break;
                  
                  case '王子天':
                  return '就是我！不过估计你已经知道了';
                  break;

                  
                  default:
                  return 'No such person yet';
              }
           }
           

         },
         
      };


      for( var j in command_directory ) {
        $.register_command( j, command_directory[j] );
      }

           });
