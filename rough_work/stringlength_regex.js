

function MaxLengthValidator(rule) {

  const lower = rule.lowerLimit;
  const upper = rule.upperLimit;

  return function Validate(value) {
    //const regex = '^[a-zA-Z]{' + lower + ',' + upper + '}$';


    const regex = `^[a-zA-Z]{${lower},${upper}}$`;
    const numRegex = /^[0-9]{0,}$/.test(value);
    const ccRegex = /^[0-9]{1,3}$/.test(value);
    console.log(numRegex);
    
    
    // return new RegExp(regex, 'gi').test(value);

    // return  /^[a-zA-Z]{3,7}$/.test(value);
     // return /^[a-zA-Z]{0,3}$/.test(value);
     // return /^[a-zA-Z]{0,5}$/.test(value);
  }
}


// const firstNameValidator = MaxLengthValidator({lowerLimit: 0, upperLimit: 50});
// console.log(firstNameValidator("aaaaaxo3d@mail.com"));

const numValidator = MaxLengthValidator({});
numValidator("3992012686678a");