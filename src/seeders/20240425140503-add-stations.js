'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('stations', [
        {
        name: 'Uttara-North',
        transport_medium: 'metro',
        createdAt:new Date(),
        updatedAt:new Date()
        },
        {
          name: 'Uttara-South',
          transport_medium: 'metro',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'Uttara-Center',
          transport_medium: 'metro',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'Pallabi',
          transport_medium: 'metro',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'Mirpur-11',
          transport_medium: 'metro',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'Mirpur-10',
          transport_medium: 'metro',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'Kazipara',
          transport_medium: 'metro',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'Shewrapara',
          transport_medium: 'metro',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'Agargaon',
          transport_medium: 'metro',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'Bijoy-Sarani',
          transport_medium: 'metro',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'Farmgate',
          transport_medium: 'metro',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'KarwanBazar',
          transport_medium: 'metro',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'ShahBag',
          transport_medium: 'metro',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'DU',
          transport_medium: 'metro',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'Motijheel',
          transport_medium: 'metro',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'Mirpur-1',
          transport_medium: 'bus',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'Mirpur-2',
          transport_medium: 'bus',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'Mirpur-10',
          transport_medium: 'bus',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'Mirpur-14',
          transport_medium: 'bus',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'Shyamoli',
          transport_medium: 'bus',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'Kallyanpur',
          transport_medium: 'bus',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'Technical',
          transport_medium: 'bus',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'Gabtoli',
          transport_medium: 'bus',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'Mohammadpur',
          transport_medium: 'bus',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'Dhanmondi',
          transport_medium: 'bus',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'ShahBag',
          transport_medium: 'bus',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'Farmgate',
          transport_medium: 'bus',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'Mohakhali',
          transport_medium: 'bus',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'Sayedabad',
          transport_medium: 'bus',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'Savar',
          transport_medium: 'bus',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'Sadarghat',
          transport_medium: 'launch',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'Lalkuthi',
          transport_medium: 'launch',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'Narayanganj',
          transport_medium: 'launch',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'Bhola',
          transport_medium: 'launch',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'Barishal',
          transport_medium: 'launch',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'Chadpur',
          transport_medium: 'launch',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'Shatnol',
          transport_medium: 'launch',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'Jhalokathi',
          transport_medium: 'launch',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'Ekhlaspur',
          transport_medium: 'launch',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'Shah Amanat International Airport(CTG)',
          transport_medium: 'airplane',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: 'Hazrat Shahjalal International Airport(DA)',
          transport_medium: 'airplane',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name: '	Barisal Airport(BA)',
          transport_medium: 'airplane',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:"Cox's Bazar Airport(COX)",
          transport_medium: 'airplane',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:"Osmani International Airport(SYL)",
          transport_medium: 'airplane',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:"Jashore Airport(JAS)",
          transport_medium: 'airplane',
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          name:"Shah Makhdum Airport(RAJ)",
          transport_medium: 'airplane',
          createdAt:new Date(),
          updatedAt:new Date()
        },
       
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('stations');
     
  }
};
