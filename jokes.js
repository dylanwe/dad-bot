const jokes = [
  `I'm tired of following my dreams. I'm just going to ask them where they are going and meet up with them later.`,
  `Did you hear about the guy whose whole left side was cut off? He's all right now.`,
  `Why didn’t the skeleton cross the road? Because he had no guts.`,
  `What did one nut say as he chased another nut?  I'm a cashew!`,
  `Chances are if you' ve seen one shopping center, you've seen a mall.`,
  `I knew I shouldn't steal a mixer from work, but it was a whisk I was willing to take.`,
  `How come the stadium got hot after the game? Because all of the fans left.`,
  `Why was it called the dark ages? Because of all the knights. `,
  `A steak pun is a rare medium well done.`,
  `Why did the tomato blush? Because it saw the salad dressing.`,
  `Did you hear the joke about the wandering nun? She was a roman catholic.`,
  `What creature is smarter than a talking parrot? A spelling bee.`,
  `I'll tell you what often gets over looked... garden fences.`,
  `Why did the kid cross the playground? To get to the other slide.`,
  `Why do birds fly south for the winter? Because it's too far to walk.`,
  `What is a centipedes's favorite Beatle song?  I want to hold your hand, hand, hand, hand...`,
  `My first time using an elevator was an uplifting experience. The second time let me down.`,
  `To be Frank, I'd have to change my name.`,
  `Slept like a log last night … woke up in the fireplace.`,
  `Why does a Moon-rock taste better than an Earth-rock? Because it's a little meteor.`,
  `I thought my wife was joking when she said she'd leave me if I didn't stop signing "I'm A Believer"... Then I saw her face.`,
  `What do you call two barracuda fish?  A Pairacuda!`,
  `Why is Peter Pan always flying? Because he Neverlands.`,
  `What do you do on a remote island? Try and find the TV island it belongs to.`,
  `Did you know that protons have mass? I didn't even know they were catholic.`,
  `Dad I’m hungry’ … ‘Hi hungry I’m dad`,
  `I was fired from the keyboard factory yesterday.  I wasn't putting in enough shifts.`,
  `Whoever invented the knock-knock joke should get a no bell prize.`,
  `Why was Pavlov's beard so soft?  Because he conditioned it.`,
  `Do I enjoy making courthouse puns? Guilty`,
  `Why did the kid throw the clock out the window? He wanted to see time fly!`,
  `Hear about the new restaurant called Karma? There’s no menu: You get what you deserve.`,
  `Why couldn't the kid see the pirate movie? Because it was rated arrr!`,
  `Man, I really love my furniture... me and my recliner go way back.`,
  `What did the traffic light say to the car as it passed? "Don't look I'm changing!"`,
  `Why did the man run around his bed? Because he was trying to catch up on his sleep!`,
  `What did one wall say to the other wall? I'll meet you at the corner!`,
  `Sometimes I tuck my knees into my chest and lean forward.  That’s just how I roll.`,
  `Conjunctivitis.com – now that’s a site for sore eyes.`,
  `How many South Americans does it take to change a lightbulb? A Brazilian`,
  `I don't trust stairs. They're always up to something.`,
  `Which is the fastest growing city in the world? Dublin'`,
  `A police officer caught two kids playing with a firework and a car battery. He charged one and let the other one off.`,
  `I went to a Foo Fighters Concert once... It was Everlong...`,
  `Some people eat light bulbs. They say it's a nice light snack.`,
  `I cut my finger chopping cheese, but I think that I may have grater problems.`,
  `What do you get hanging from Apple trees? Sore arms.`,
  `Last night me and my girlfriend watched three DVDs back to back. Luckily I was the one facing the TV.`,
  `I got a reversible jacket for Christmas, I can't wait to see how it turns out.`,
  `What did Romans use to cut pizza before the rolling cutter was invented? Lil Caesars`,
  `My pet mouse 'Elvis' died last night. He was caught in a trap..`,
  `Never take advice from electrons. They are always negative.`,
  `Why are oranges the smartest fruit? Because they are made to concentrate. `,
  `What did the beaver say to the tree? It's been nice gnawing you.`,
  `How do you fix a damaged jack-o-lantern? You use a pumpkin patch.`,
  `What did the late tomato say to the early tomato? I’ll ketch up`,
  `I have kleptomania, but when it gets bad, I take something for it.`,
  `I used to be addicted to soap, but I'm clean now.`,
  `Did you hear about the restaurant on the moon? Great food, no atmosphere.`,
  `What do you call a fake noodle? An Impasta.`,
  `How many apples grow on a tree? All of them.`,
  `Want to hear a joke about paper? Nevermind it's tearable.`,
  `I just watched a program about beavers. It was the best dam program I've ever seen.`,
  `Why did the coffee file a police report? It got mugged.`,
  `How does a penguin build it's house? Igloos it together.`,
  `Dad, did you get a haircut? No I got them all cut.`,
  `What do you call a Mexican who has lost his car? Carlos.`,
  `Dad, can you put my shoes on? No, I don't think they'll fit me.`,
  `Why did the scarecrow win an award? Because he was outstanding in his field.`,
  `Why don't skeletons ever go trick or treating? Because they have no body to go with.`,
  `Ill call you later. Don't call me later, call me Dad.`,
  `What do you call an elephant that doesn't matter? An irrelephant`,
  `Want to hear a joke about construction? I'm still working on it.`,
  `What do you call cheese that isn't yours? Nacho Cheese.`,
  `Why couldn't the bicycle stand up by itself? It was two tired.`,
  `What did the grape do when he got stepped on? He let out a little wine.`,
  `I wouldn't buy anything with velcro. It's a total rip-off.`,
  `The shovel was a ground-breaking invention.`,
  `Dad, can you put the cat out? I didn't know it was on fire.`,
  `This graveyard looks overcrowded. People must be dying to get in there.`,
  `Whenever the cashier at the grocery store asks my dad if he would like the milk in a bag he replies, "No, just leave it in the carton!"`,
  `5/4 of people admit that they’re bad with fractions.`,
  `Two goldfish are in a tank. One says to the other, "do you know how to drive this thing?"`,
  `What do you call a man with a rubber toe? Roberto.`,
  `What do you call a fat psychic? A four-chin teller.`,
  `I would avoid the sushi if I was you. It’s a little fishy.`,
  `To the man in the wheelchair that stole my camouflage jacket... You can hide but you can't run.`,
  `The rotation of earth really makes my day.`,
  `I thought about going on an all-almond diet. But that's just nuts`,
  `What's brown and sticky? A stick.`,
  `I’ve never gone to a gun range before. I decided to give it a shot!`,
  `Why do you never see elephants hiding in trees? Because they're so good at it.`,
  `Did you hear about the kidnapping at school? It's fine, he woke up.`,
  `A furniture store keeps calling me. All I wanted was one night stand.`,
  `I used to work in a shoe recycling shop. It was sole destroying.`,
  `Did I tell you the time I fell in love during a backflip? I was heels over head.`,
  `I don’t play soccer because I enjoy the sport. I’m just doing it for kicks.`,
  `People don’t like having to bend over to get their drinks. We really need to raise the bar.`
];

module.exports = jokes;