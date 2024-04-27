'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('metros', [
        {
        name:'Dhaka Metro',
        originStation: 'Uttara-North',
        destinationStation: 'Uttara-Center',
        price:20,
        createdAt:new Date(),
        updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-North',
          destinationStation: 'Uttara-South',
          price:20,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-North',
          destinationStation: 'Pallabi',
          price:30,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-North',
          destinationStation: 'Mirpur-11',
          price:30,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-North',
          destinationStation: 'Mirpur-10',
          price:40,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-North',
          destinationStation: 'Kazipara',
          price:40,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-North',
          destinationStation: 'Shewrapara',
          price:50,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-North',
          destinationStation: 'Agargaon',
          price:60,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-North',
          destinationStation: 'Bijay-Sarani',
          price:60,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-North',
          destinationStation: 'Farmgate',
          price:70,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-North',
          destinationStation: 'KarwanBazar',
          price:80,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-North',
          destinationStation: 'ShahBag',
          price:80,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-North',
          destinationStation: 'DU',
          price:90,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-North',
          destinationStation: 'Motijheel',
          price:100,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-Center',
          destinationStation: 'Uttara-North',
          price:20,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-Center',
          destinationStation: 'Uttara-South',
          price:20,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-Center',
          destinationStation: 'Pallabi',
          price:20,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-Center',
          destinationStation: 'Mirpur-11',
          price:30,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-Center',
          destinationStation: 'Mirpur-10',
          price:30,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-Center',
          destinationStation: 'Kazipara',
          price:40,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-Center',
          destinationStation: 'Shewrapara',
          price:40,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-Center',
          destinationStation: 'Agargaon',
          price:50,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-Center',
          destinationStation: 'Bijay-Sarani',
          price:60,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-Center',
          destinationStation: 'Farmgate',
          price:70,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-Center',
          destinationStation: 'KarwanBazar',
          price:70,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-Center',
          destinationStation: 'ShahBag',
          price:80,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-Center',
          destinationStation: 'DU',
          price:80,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-Center',
          destinationStation: 'Motijheel',
          price:90,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-South',
          destinationStation: 'Uttara-North',
          price:20,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-South',
          destinationStation: 'Uttara-Center',
          price:20,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-South',
          destinationStation: 'Pallabi',
          price:20,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-South',
          destinationStation: 'Mirpur-11',
          price:20,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-South',
          destinationStation: 'Mirpur-10',
          price:30,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-South',
          destinationStation: 'Kazipara',
          price:30,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-South',
          destinationStation: 'Shewrapara',
          price:40,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-South',
          destinationStation: 'Agargaon',
          price:40,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-South',
          destinationStation: 'Bijay-Sarani',
          price:50,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-South',
          destinationStation: 'Farmgate',
          price:60,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-South',
          destinationStation: 'KarwanBazar',
          price:60,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-South',
          destinationStation: 'ShahBag',
          price:70,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-South',
          destinationStation: 'DU',
          price:70,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Uttara-South',
          destinationStation: 'Motijheel',
          price:80,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Pallabi',
          destinationStation: 'Uttara-North',
          price:30,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Pallabi',
          destinationStation: 'Uttara-Center',
          price:20,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Pallabi',
          destinationStation: 'Uttara-South',
          price:20,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Pallabi',
          destinationStation: 'Mirpur-11',
          price:20,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Pallabi',
          destinationStation: 'Mirpur-10',
          price:20,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Pallabi',
          destinationStation: 'Kazipara',
          price:20,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Pallabi',
          destinationStation: 'Shewrapara',
          price:30,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Pallabi',
          destinationStation: 'Agargaon',
          price:30,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Pallabi',
          destinationStation: 'Bijay-Sarani',
          price:40,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Pallabi',
          destinationStation: 'Farmgate',
          price:50,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Pallabi',
          destinationStation: 'KarwanBazar',
          price:50,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Pallabi',
          destinationStation: 'ShahBag',
          price:60,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Pallabi',
          destinationStation: 'DU',
          price:60,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Pallabi',
          destinationStation: 'Motijheel',
          price:70,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Mirpur-11',
          destinationStation: 'Uttara-North',
          price:30,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Mirpur-11',
          destinationStation: 'Uttara-Center',
          price:30,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Mirpur-11',
          destinationStation: 'Uttara-South',
          price:20,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Mirpur-11',
          destinationStation: 'Pallabi',
          price:20,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Mirpur-11',
          destinationStation: 'Mirpur-10',
          price:20,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Mirpur-11',
          destinationStation: 'Kazipara',
          price:20,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Mirpur-11',
          destinationStation: 'Shewrapara',
          price:20,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Mirpur-11',
          destinationStation: 'Agargaon',
          price:30,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Mirpur-11',
          destinationStation: 'Bijay-Sarani',
          price:40,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Mirpur-11',
          destinationStation: 'Farmgate',
          price:40,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Mirpur-11',
          destinationStation: 'KarwanBazar',
          price:50,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Mirpur-11',
          destinationStation: 'ShahBag',
          price:60,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Mirpur-11',
          destinationStation: 'DU',
          price:60,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Mirpur-11',
          destinationStation: 'Motijheel',
          price:70,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Mirpur-10',
          destinationStation: 'Uttara-North',
          price:40,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Mirpur-10',
          destinationStation: 'Uttara-Center',
          price:30,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Mirpur-10',
          destinationStation: 'Uttara-South',
          price:30,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Mirpur-10',
          destinationStation: 'Pallabi',
          price:20,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Mirpur-10',
          destinationStation: 'Mirpur-11',
          price:20,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Mirpur-10',
          destinationStation: 'Kazipara',
          price:20,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Mirpur-10',
          destinationStation: 'Shewrapara',
          price:20,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Mirpur-10',
          destinationStation: 'Agargaon',
          price:20,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Mirpur-10',
          destinationStation: 'Bijay-Sarani',
          price:30,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Mirpur-10',
          destinationStation: 'Farmgate',
          price:30,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Mirpur-10',
          destinationStation: 'KarwanBazar',
          price:40,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Mirpur-10',
          destinationStation: 'ShahBag',
          price:50,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Mirpur-10',
          destinationStation: 'DU',
          price:50,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:'Dhaka Metro',
          originStation: 'Mirpur-10',
          destinationStation: 'Motijheel',
          price:60,
          createdAt:new Date(),
          updatedAt:new Date()
        },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('metros');
    
  }
};
