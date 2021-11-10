const bikes = [
    {
        id: 1,
        name : 'Honda Shine 125R',
        img : `https://www.bikebd.com/wp-content/uploads/2020/12/honda-dream-110-price-1024x768.jpg`,
        description : `Honda Dream 110 is the newest addition to the commuter segment by Honda Private Limited Bangladesh. The commuter segment of motorcycles in Bangladesh is seen just like Prius in the USA; It may not be what we want, but it is always there to save the day when we have a small budget. The commuter segment is also considered as the segment that gives the most bang for the buck. Honda, over the years, has given the Bangladeshi motorcycling crowd quite a few commuters, and the Honda Dream 110 is another name on that list.`,
        price : '1,45,000'
    },
    {
        id: 2,
        name : 'Honda CB Hornet 160R',
        img : `https://www.bikebd.com/wp-content/uploads/2020/12/honda-cb-hornet-160r-cbs-1.jpg`,
        description : `Bangladesh Honda Pvt. Ltd. (BHL) officially launched the brand new HONDA CB Hornet 160R CBS in Bangladesh at the Dhaka Bike Show 2019. It will have almost all the features similar to the HONDA CB Hornet 160R and also feature the Combi Brake System (CBS).HONDA CB Hornet 160R was first launched in December, 2015 in India. In Bangladesh, the launch date WAS February 16, 2018. Motor heads of the country received this bike with a great joy at the launch of this new bike.`,
        price : '1,90,000'
    },
    {
        id: 3,
        name : 'Yamaha FZS F1 V3',
        img : `https://www.bikebd.com/wp-content/uploads/2020/12/yamaha-fzs-v3-1024x726.jpg`,
        description : `If you are a biker from Bangladesh, you must know the FZ series in Bangladesh and the subcontinent is a favorite. This series set the benchmark on its launch back in the days and all the other manufacturers followed soon. Recently, version 3 of the famous series has been introduced in Bangladesh. The latest bikes from the FZ series are currently sold by ACI Motors Ltd as this YAMAHA FZ-S FI V3.0 with which we are here today. The FZ series now gets a Single Channel ABS too. See pictures of YAMAHA FZ-S FI V3.0 here.The Yamaha FZSFI V3 is the third generation of the 150cc FZS series. The 150cc range motorcycle was first introduced in 2008 under the FZ16 badge. It is primarily sold in India, Indonesia, and a few South American countries. It expands its market to include many countries in Asia as well as South America.
        The first-generation motorcycles featured a carburetor fuel-feeding system. These were 153cc motorbikes. The second-generation motorcycles had different engine sizes and fuel systems. It is now equipped with an Electronic Fuel Injection System, and the engine’s size has been reduced to 149cc. The latest version was launched in this year’s model year, with many enhancements and updates.`,
        price : '2,35,000'
    },
    {
        id: 4,
        name : 'Yamaha R15 V4',
        img : `https://www.bikebd.com/wp-content/uploads/2021/08/yamaha-r15-v4-blue.webp`,
        description : `
        The Yamaha R15 V4 is the latest model of the renowned R15 series. The Yamaha R15 has become the poster bike for practically all motorcycle enthusiasts in the South Asian region throughout the years. The Yamaha R15 V3 was the zenith of sports bikes for most Bangladeshis, as it is regarded as the benchmark of sport bikes. There have been competitors in the past, such as the Honda CBR 150R and the Suzuki GSX-R 150, but none have achieved the same level of popularity as the Yamaha R15 V3. The new Yamaha R15 V4 is predicted to grow in popularity even more than the previous model.
        
        `,
        price : '4,95,000'
    },
    {
        id: 5,
        name : 'Bajaj Pulsar NS160',
        img : `https://www.bikebd.com/wp-content/uploads/2021/01/new-bajaj-pulsar-ns160.jpg`,
        description : `Sports commuters such as the Bajaj Pulsar NS160 Twin Disc are quite popular among Bangladeshi youths. Sports commuters are most popular due to the amount of torque and power they produce. Bajaj Pulsar NS160 has been in the market since 2017 and since its inception, it has been widely accepted. Here you will be introduced to the specifications and overview of the Bajaj Pulsar NS160 Twin Disc.Bajaj is one of the top motorcycle manufacturers in the world. Bajaj markets in Bangladesh through Uttara Motors Limited. One of the most reliable series by Bajaj is the Bajaj Pulsar series. Bajaj Pulsar series has been in production since 2001 and has been one of the highest-selling motorcycles in Bangladesh and India. One of the most powerful installments by Bajaj within the 165cc segment is the Bajaj Pulsar NS160. They brought the Twin disc variant of the same bike almost right after the single disc variant. And this bike got a lot of praise as soon as it came out.`,
        price : '1,90,000'
    },
    {
        id: 6,
        name : 'Bajaj Discover 125',
        img : `https://www.bikebd.com/wp-content/uploads/2020/12/bajaj-discover-125-disc-price-1024x768.jpg`,
        description : `Bajaj Discover 125 Disc is another installment in the Bajaj Discover series. The Bajaj Discover series is probably one of the most popular series in Bangladesh. The popularity of the Bajaj Discover is there mostly because of the demand for commuter bikes in Bangladesh. The general public, who use commuter bikes, deem the Bajaj Discover series to be one of the best-value-for-money commuter bike series in Bangladesh. There are two versions of the Bajaj Discover 125 available in Bangladesh; they are the disc and the drum variant. Here we will be talking about the Bajaj Discover 125 DiscBajaj is one of the most popular motorcycle brands in the South Asian region. Bajaj is so popular that it has also collaborated with KTM. Over the years Bajaj has sold countless commuter motorcycles in Bangladesh. Bikes series such as the Pulsar Series, Discover Series, and Platina Series are widely popular among Bangladeshis. 
        `,
        price : '1,35,000'
    },
    {
        id: 7,
        name : 'Hero Glamour',
        img : `https://www.bikebd.com/wp-content/uploads/2020/12/hero-glamour.jpg`,
        description : `
        Hero MotoCorp is one of India’s main motorbike manufacturing organizations, which used to release their product in the Indian subcontinent, which includes Bangladesh. Hero is one of the top famous and trustworthy emblems in Bangladesh, which entered the Bangladeshi market first in the long term with Honda enterprise. Then it was modified into called hero Honda.By separating with Honda, Hero re-entered the market in 2011 and launched their one vintage product with a new name. The product is Hero Glamour; this is a 125 cc popular category commuter bike. Among 125 cc available bikes in Bangladesh, Hero Glamour is one of the most famous motorcycles wherein Hero used their current-day technology to construct it. Due to the robust engine and fabulous outlooks, Hero Glamour has gained the coronary heart of riders in the united states of America.`,
        price : '1,25,000'
    },
    {
        id: 8,
        name : 'Hero Hunk 160R',
        img : `https://www.bikebd.com/wp-content/uploads/2020/12/hero-hunk-160-price-1024x768.jpg`,
        description : `New Hero Hunk 150R is a sports commuter. Sports commuters are fun bikes. These bikes are really popular in Bangladesh and neighboring countries. These bikes are most popular among the youths of these countries. This is mostly because these bikes are fun to ride, fuel-efficient, and look really good. Indian companies such as Hero, Bajaj, and TVS have been trying their best to conquer this segment of motorcycles over the years. Recently, Hero made quite some noise in the sports commuter market with the Hero Thriller 160R (also known as Hero Xtreme 160R in India).As previously mentioned, the headlight is slightly redesigned. The headlight still gives off the Hunk vibe, which will allow you to recognize it from a distance. The headlight is a halogen bulb. The taillight is also redesigned to look really slick. The bike also has two new parking LEDs with the headlight. The headlight would have been much better if it was LED`,
        price : '1,65,000'
    },
    {
        id: 9,
        name : 'TVS Apache RTR160 4V',
        img : `https://www.bikebd.com/wp-content/uploads/2020/12/tvs-apache-rtr-160-4v-bs6-price-1024x768.jpg`,
        description : `TVS Apache RTR 160 4V is the fun pack of the Apache RTR family that is committed to increasing the excitement of street racing. Therefore, in this South Asian subcontinent, the drivers are very interested in the motorbike and eager to find out the details of its features. This is why we have TVS Apache RTR 160 4V Review of the Feature. We invite you to join us and sketch the new texture of the bike in full detail.YAMAHA by ACI Motors
        Apache RTR series Apache RTR series starting from 2006 is specifically designed for the new generation of riding. This is why they have produced the diverse capabilities of RTR and spread the world’s economy including Asia in addition to South America. So the series is doing very well, with its features that include power and fuel efficiency. We are now going to review the brand new Apache RTR 160 4V.`,
        price : '1,85,000'
    },
    {
        id: 10,
        name : 'Suzuki Gixxer',
        img : `https://www.bikebd.com/wp-content/uploads/2020/12/suzuki-gixxer-1.jpg`,
        description : `Suzuki is a well-known logo all over the international and their motorcycles are a lot famous in our Bangladesh . They have many bikes that constructed high-quality and overall performance is simply great. Suzuki gixxer is certainly one of their bikes. They are going to deliver the new edition Suzuki Gixxer a hundred and fifty five 2019 soon in our united states.Suzuki Gixxer is a competitor to Bajaj Pulsar NS160, Yamaha FZS Fi V2, Honda CB Hornet 160R & TVS Apache RTR160 4V. We have examined all the one’s motorcycles (even though unique variants) & eventually, we were given the danger to study Suzuki Gixxer.
        Suzuki Gixxer receives a halogen headlight & crystal clean LED tail slight. The completely digital speedometer has a purple historic beyond which features together with equipment exchange indicator, clock and rev limiter mild. In the new version, the colour is certainly smooth.`,
        price : '1,75,000'
    },
    {
        id: 11,
        name : 'Suzuki Samurai GR150',
        img : `https://www.bikebd.com/wp-content/uploads/2020/12/suzuki-gr150-samurai-1024x768.jpg`,
        description : `The word ‘Samurai’ roughly translates to ‘warrior.’ Ancient Japanese had high respect for Samurais as they spent their entire life training to become warriors. So when Suzuki released the Suzuki Samurai 150, people understood that this bike would take a beating and still stand strong, as this is a 150cc commuter bike. Back in the day, Suzuki Samurai was a notoriously legendary motorcycle. So when the newer version came as the Suzuki Samurai 150, people were quite excited about the bike.Suzuki is a Japanese motorcycle manufacturer. Suzuki is considered one of the largest motorcycle manufacturers in the world. There may be only a handful of people in the world that don’t know about Suzuki motorcycles. Suzuki has also successfully made quite a lot of commuter bikes. A few of the most notable commuters of Suzuki are the Suzuki GSX 125, Suzuki Bandit 150, Suzuki Gixxer 155, and Suzuki Samurai 150.`,
        price : '1,20,000'
    },
    {
        id: 12,
        name : 'Benelli 165S',
        img : `https://www.bikebd.com/wp-content/uploads/2020/12/benelli-165s-1024x768.jpg`,
        description : `When we talk about Pasta and Pizza, we think of Italian. But since the early 1900s, the Italians also started making good looking bikes. And just like a good plate of well-cooked spaghetti, Benelli presented the Benelli 165S to the public. The Benelli 165S is a 164.7cc naked sportbike YAMAHA by ACI Motors.
        The Benelli Q.J introduced the Benelli 165S at the 5th Dhaka Bike Show through Aftab Automobiles. The Benelli 165S was designed by Benelli, in Italy. The bike since then has attracted a lot of the Bangladeshi youth through its beautiful design and attractive looks. The bike is not only good-looking, but it is also filled with quality and technology.`,
        price : '2,25,000'
    }
];