// create a bulk insert for 100 parcels
import ParcelModel from '../models/Parcels.js'

ParcelModel.insertMany([
  {
    region: 'PIURA',
    name: 'CAMPOSOL S.A.',
    code: '002-04173-04',
    description:
      'Camposol, es una compañía agroindustrial, cuyas operaciones se iniciaron en 1997. La compañía actualmente cuenta con más de 25,000 hectáreas de tierras en las zonas de Chao, Virú y Piura; ubicadas en La Libertad y Piura, regiones del norte peruano.',
    orchardName: 'FUNDO AGRO ALEGRE',
    image:
      'https://res.cloudinary.com/ddwtkjumq/image/upload/v1669099587/Camposol_gdfugs.jpg'
  },
  {
    region: 'PIURA',
    name: 'DESARROLLO FRUTICOLA SUDAMERICANA SAC.',
    code: '002-26240-04',
    description:
      'Es una empresa en Perú, con sede principal en Lima. Opera en Cultivo de Árboles Frutales y Nueces sector. La empresa fue fundada en 18 de mayo de 2017.',
    orchardName: 'FUNDO FATIMA IV',
    image:
      'https://res.cloudinary.com/ddwtkjumq/image/upload/v1669099602/defrusa_rivq33.png'
  },
  {
    region: 'PIURA',
    name: 'AGRICOLA EL ABO .E.I.R.L',
    code: '002-18970-02',
    description:
      'Fue establecida en 19/04/2013 y su objeto social está relacionado con: Cultivo de frutas, nueces, plantas cuyas hojas se utilizan para preparar bebidas, y especias.',
    orchardName: 'PANAMERICANA (PREDIO 2)',
    image:
      'https://res.cloudinary.com/ddwtkjumq/image/upload/v1669099609/201509021336272397_hyzw5c.jpg'
  },
  {
    region: 'PIURA',
    name: 'SOCIEDAD AGRICOLA RAPEL S.A.C',
    code: '002-08004-04',
    description:
      'Es una empresa en Perú, con sede principal en Piura. Opera en Cultivo de Árboles Frutales y Nueces sector. La empresa fue fundada en 15 de febrero de 2011. Actualmente emplea a 8,554 (2022) personas.',
    orchardName: 'PREDIO 04 EL PAPAYO',
    image:
      'https://res.cloudinary.com/ddwtkjumq/image/upload/v1669099617/2ea57c3e8d875ddb1200f9fcd4e6090b0b05b425-5242880_xn2qul.jpg'
  }
])
  .then(() => {
    console.log('Data inserted')
  })
  .catch((error) => {
    console.log(error)
  })
