import React, { useState } from 'react';
import PocketCanvas from './PocketCanvas';
import Navbar from '../Navbar/Navbar';

const Pockets = () => {
    const hdSand = Math.random() < 0.5;
    
    return (
        <div className='text-white mb-16'>
            <Navbar />
            <div className='flex flex-row text-9xl items-center justify-center'>
                <span className='flex'>
                    P
                </span>
                <span className='flex w-32'>
                    <PocketCanvas />
                </span>
                <span className='flex'>
                    CKETS
                </span>
            </div>
            <div className='flex flex-col text-xl mx-96'>
                <p className='flex justify-center italic'>
                    An essay on the upheaval of food psychology and a rebuttal of the cube rule of food by Deuce Black
                </p>
                <p className='flex justify-center italic mb-16'>
                    Originally ideated alongside Jay Horner
                </p>
                <p className='flex'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    So... you're probably wondering what a Pocket is, right?
                    Well, a Pocket is an idea. It's a dream. Despite being so ethereal, it's also my reality.
                    I live in a world of Pockets. My kitchen is full of Pockets, and I have a Pocket most days for lunch.
                    I've consumed thousands of Pockets over my lifetime, and you have too. So why is it that we fight over the terminology?
                    Friendships are destroyed and families are betrayed day in and day out, and it all originates from the age-old question:
                </p>
                <br />
                <p className='flex font-semibold italic'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Is a hot dog a sandwich?
                </p>
                <br />
                <p className='flex'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Now of course, we all know that every rational person would say{' '}
                    {hdSand ? 'yes' : 'no'}
                    , of course a hot dog{' '}
                    {hdSand ? 'is' : "isn't"}
                    {' '}a sandwich. However, dear reader, I am here today neither to convince you that a hot dog is a sandwich nor that it is not one.
                    I am here today to convince you that these wars are naught but divisive, and we must change our psychology on the matter entirely.
                    Rather than attempt to classify hot dogs as sandwiches, or tacos, or (least-validly) quiches,
                    we should instead accept that there is one overarching superclass that holds all of these categories.
                </p>
                <br />
                <p className='flex'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Many have tried and failed in the past to end this debate once and for all.
                    The most prominent example is the cube rule of food, a viral site that attempts to classify all foods as one of nine categories.
                    However, I hold so little respect for the theory that I will be transparent with you now that not citing this website is a very conscious decision.
                    As the ethicist-half of the Pocket ideology's founding fathers, Jay Horner, would say, "the wrongness of cube theory is prima facie" - that is,
                    upon first impression, without doing so much more than a speck of investigation, cube theory as a whole radiates falsiness at a gut level.
                    An inordinate number of examples can be disproven simply because there is no more incorrect fact in the universe than stating "a [food item] is a [category]".
                    Following are just a few examples. I could go on for hours.
                </p>
                <br />
                <p className='flex'>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    • Saying "a chocolate bar is a salad" breaks every single Weight Watchers rule, and tears my soul asunder.
                </p>
                <p className='flex'>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    • Saying "a steak is a salad" makes the vegans angry, and we can't have that.
                </p>
                <p className='flex'>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    • Saying "a bowl of lucky charms is a nacho dish" redefines nachos to include marshmallows, a feat only Willy Wonka could pull off.
                </p>
                <p className='flex'>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    • Saying "a gyro is a sushi" completely ignores the fact that at least half of the gyros I've eaten have been left open, akin to the shape of a taco shell.
                </p>
                <br />
                <p className='flex'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    There also exist a number of multiclassed foods within the system, which defeats the point of inheritance to begin with.
                    Some foods that are harolded as the golden child that defines an entire category are even recategorized into others.
                </p>
                <br />
                <p className='flex'>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    • By the cube rule, a single pancake would be categorized as a type of toast. However, a stack of pancakes is categorized as a cake.
                </p>
                <p className='flex'>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    • Everything is defined by the location of its starch, and yet mashed potatoes, a dish of nothing but starch, is classified as a starchless salad.
                </p>
                <p className='flex'>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    • Sushi is sushi. Unless it's nigiri sushi, apparently. That's toast.
                </p>
                <p className='flex'>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    • A slice of pie is defined as a sideways taco. I already hate that, but then a slice of specifically-pumpkin pie is defined as bent toast, for... reasons.
                </p>
                <p className='flex'>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    • A slice of toast is toast, but three slices of toast in a pile makes a sandwich. By this logic, pancakes are even more confusing.
                </p>
                <p className='flex'>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    • Salad is salad. Unless it's in a bread bowl, then it's a quiche. Oh, but if it has croutons in it, it's a nacho dish.
                </p>
                <p className='flex'>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    • Uncrustables are only calzones if they are unbitten, apparently. Doesn't that destroy the logic of all calzones?
                </p>
                <br />
                <p className='flex'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    By the cube rule's own logic, I could dissect and destroy the cube rule.
                    However, as I stated earlier, I am not in the business of dividing factions over silly categories.
                    I am here to offer an alternative. I am here to indoctrinate the masses into the school of the Pocket.
                    Pockets are not an addition to the cube rule. They are an encompassing superclass for many of its definitions.
                </p>
                <br />
                <p className='flex'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    A Pocket is defined as any food with structural starch that you eat with your hands, such that if the starch were removed,
                    it would fundamentally change the food into a completely different or unstructured food. Q.E.D. ▢
                </p>
                <br />
                <p className='flex'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    ...and that's it. Isn't that simple? Let hot dogs and sandwiches be hot dogs and sandwiches.
                    Whatever you would call them at first glance is fine. Their connection comes in the fact that they are both Pockets.
                    A gyro is a Pocket, regardless of the degree to which it is enclosed. An Uncrustable is a Pocket.
                    Pizza is a Pocket. A quesadilla is a pocket. A taco is a pocket. Pigs in a blanket? Pockets.
                    Falafel pitas? Pockets. Burritos? Pockets. Pop-Tarts? Pockets. Dumplings? Pockets. Hot Pockets? It's in the name!
                </p>
                <br />
                <p className='flex'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    This also solves the cube rule's weird salad issue. It's easy. Nothing without structural starch is a Pocket.
                    No chocolate bars, steaks, or soups allowed.
                </p>
                <br />
                <p className='flex'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    I admit, this theory is not without its flaws. Its subjective nature means that different people may think different things are or are not Pockets.
                    Jay and I have certainly come up with several strange edge cases.
                    Chicken nuggets are not Pockets, because if you remove the breading, you still have a chicken nugget. The starch is not structural.
                    Sushi is not a pocket for several reasons. First of all, traditional sushi has seaweed on the outside, not rice.
                    Second of all, you can remove the rice and still have perfectly good sushi. It's just probably a little crunchier.
                    Third, although it is traditionally eaten by hand, modern common practice is to eat it with chopsticks. Sushi is not a pocket.
                    Finally, a corn dog is not a Pocket. We went back and forth on this one, but since you hold it by the stick and not the food itself,
                    and a corn-less corndog is still recognizable (even if it's more of a weiner on a stick), it's not a Pocket.
                </p>
                <br />
                <p className='flex'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    I truly hope that the wars over hot dogs, sandwiches, and tacos can cease knowing that the Pocket theory will take in all contenders.
                    Rather than end relationships, we hope to unite people under peace and a love for Pockets.
                    Please spread this theory to your friends, and together, we can take down the tyrannical cube theory to become the prevailing school of sandwich discourse.
                    No more in-fighting, only scholarly debate to an objective decision on whether each food is or is not a pocket.
                </p>
            </div>
        </div>
    );
};

export default Pockets;