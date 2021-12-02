/** *
 * Функция устанавливает склонение слову, в зависимости от переданого в неё числа
 * @param source_num - само число
 * @param variant_one - склонение которое будет если число = 1
 * @param variant_two - склонение которое будет если число >= 2 && <= 4
 * @param variant_three - склонение которое будет если число >= 5 && <= 20 или = 0
 * @param variant_four - склонение которое будет если число = 0
 * так же функция правильно работает с числами больше 20, если оно такого то функция выставит склонение по последнему числу из всего числа
 */
const declination = (
  source_num: number,
  variant_one: string,
  variant_two: string,
  variant_three: string,
  variant_four?: string
  // eslint-disable-next-line consistent-return
): any => {
  // eslint-disable-next-line consistent-return
  const check = (num: number): any => {
    if (num === 1) return variant_one;
    if (num >= 2 && num <= 4) return variant_two;
    if (num >= 5 && num <= 20) return variant_three;
    if (num === 0) return variant_four || variant_three;
  };

  if (source_num < 21) return check(source_num);

  if (source_num > 20) {
    // достаём последнее число из строки
    const num = `${source_num}`[`${source_num}`.length - 1];
    return check(+num);
  }
};

export default declination;
