
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {
          id: 1,
          name: 'Commons Park',
          lat: '39.756505',
          long: '-105.005284',
          photo: 'https://s3.amazonaws.com/myzspot-deployments-mobilehub-1132114922/park.jpg?response-content-disposition=inline&X-Amz-Security-Token=AgoGb3JpZ2luEBQaCXVzLWVhc3QtMSKAAhLJGlBnmKg3UtaPdkwqfcsCBkgZ0cCraqwHJzjljgTBL1IN4fACbY1oPtPf0ULAhHr2JSBRzdNvDEV46i18VMCR3ggdeESr30RqwC48O%2BLgve%2FfCnXIq8M%2B28PU1FtKeZrbhns92dUPZoDLhguwZXbWQ4f8fnr%2FnhYQcle26tOqEu7NL3DT2XGGgtFFPX3ShYMQB4VpUXlrOih%2FlURMQNJx9%2FudtC%2FHTFXdKzu2i7W4IhmjsIyqHJVe6XmGmojd9aH3ngfh5Ki9EXACDVsFaEiypTeYv%2FQ8V2lLWUC2WUsKGTSHcXMXfeIZHY3ZjpVIpQjsTxqX%2BzOG%2BxvXgWC8vYsq5AMI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw5MzU1NjcyNzc5ODUiDF2xB8XY9EYBzEmgICq4Ax4OmweHKzcuiJuBJkXD%2BE866DzWPoXc0iOwhfiFFBQmCgNVjz2wpKw56KuaIitfwosQwFYvOeH%2FnO7IMTQEakFXGZLP4AD7W6CNu8IQYkGbOvndyGg94ubKdcn8yMQbMB5KwR7I5Q3foYSqzizIZQuFxe9PWo3nYFdXHNOUwOf690IT8UXU8JmoNndOkuQb8QQu4wJY9DJBnU6CpUiLEQFYxOifvuEluBJo9kKiQRMeuO03Gdnzv%2BxqrZ5GgS8qSorq%2BiebuEVxo0t1bOVLIroAv2jOFSTeEyiZvQb%2Flp2qOt91kqnwFpFzMKuBUjudjtfXiyjoWgqzOlhRdV4faGsCb24BCW7%2FM73RMyZnPt6MY%2B3qOQvCa0hrlUAbdyhvTsSEFx%2BF%2BfDeOGUOD4DcFH8fcE2qe%2BIemvfOtgZqTFzyU%2FAzijCUd0RL06bIkg4W9pbCHnuM6lmfjRBl5u6tF7e4mwUtY1xHSmE8OO9TTu6uGbvXegUPwvzVaFufhM76ZGa3IwmGfuxJMKrbB9p36lvcK%2BkY8Vt6E%2BkgfjAn7WknBEa8lkyZr6hMhqri%2FrbJ9iQqqfhLnQOoMKq7vdoF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180718T160952Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA5TVBHX6QTDEAL3X7%2F20180718%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b84ddfd9aecf26449ee1253970f61c0cd22c79005a48b039374b32fc38d618f8',
          description: 'Lots of space to practice outdoors and occasionally free guided sessions!'
        },
        {
          id: 2,
          name: 'Zuni Park',
          lat: '39.788993',
          long: '-105.015101',
          photo: 'https://s3.amazonaws.com/myzspot-deployments-mobilehub-1132114922/ZuniPark.jpg?response-content-disposition=inline&X-Amz-Security-Token=AgoGb3JpZ2luEBQaCXVzLWVhc3QtMSKAAhLJGlBnmKg3UtaPdkwqfcsCBkgZ0cCraqwHJzjljgTBL1IN4fACbY1oPtPf0ULAhHr2JSBRzdNvDEV46i18VMCR3ggdeESr30RqwC48O%2BLgve%2FfCnXIq8M%2B28PU1FtKeZrbhns92dUPZoDLhguwZXbWQ4f8fnr%2FnhYQcle26tOqEu7NL3DT2XGGgtFFPX3ShYMQB4VpUXlrOih%2FlURMQNJx9%2FudtC%2FHTFXdKzu2i7W4IhmjsIyqHJVe6XmGmojd9aH3ngfh5Ki9EXACDVsFaEiypTeYv%2FQ8V2lLWUC2WUsKGTSHcXMXfeIZHY3ZjpVIpQjsTxqX%2BzOG%2BxvXgWC8vYsq5AMI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw5MzU1NjcyNzc5ODUiDF2xB8XY9EYBzEmgICq4Ax4OmweHKzcuiJuBJkXD%2BE866DzWPoXc0iOwhfiFFBQmCgNVjz2wpKw56KuaIitfwosQwFYvOeH%2FnO7IMTQEakFXGZLP4AD7W6CNu8IQYkGbOvndyGg94ubKdcn8yMQbMB5KwR7I5Q3foYSqzizIZQuFxe9PWo3nYFdXHNOUwOf690IT8UXU8JmoNndOkuQb8QQu4wJY9DJBnU6CpUiLEQFYxOifvuEluBJo9kKiQRMeuO03Gdnzv%2BxqrZ5GgS8qSorq%2BiebuEVxo0t1bOVLIroAv2jOFSTeEyiZvQb%2Flp2qOt91kqnwFpFzMKuBUjudjtfXiyjoWgqzOlhRdV4faGsCb24BCW7%2FM73RMyZnPt6MY%2B3qOQvCa0hrlUAbdyhvTsSEFx%2BF%2BfDeOGUOD4DcFH8fcE2qe%2BIemvfOtgZqTFzyU%2FAzijCUd0RL06bIkg4W9pbCHnuM6lmfjRBl5u6tF7e4mwUtY1xHSmE8OO9TTu6uGbvXegUPwvzVaFufhM76ZGa3IwmGfuxJMKrbB9p36lvcK%2BkY8Vt6E%2BkgfjAn7WknBEa8lkyZr6hMhqri%2FrbJ9iQqqfhLnQOoMKq7vdoF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180718T161932Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA5TVBHX6QTDEAL3X7%2F20180718%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ae380a44590cdea4c6243a4afeffe7cf1fd65eb19833fb674911765a2f6ce58e',
          description: 'Beatiful park with a great view of the Denver skyline.'
        },
        {
          id: 3,
          name: 'Chaffee Park',
          lat: '39.776283',
          long: '-105.010639',
          photo: 'https://s3.amazonaws.com/myzspot-deployments-mobilehub-1132114922/ChaffeePark.jpg?response-content-disposition=inline&X-Amz-Security-Token=AgoGb3JpZ2luEBQaCXVzLWVhc3QtMSKAAhLJGlBnmKg3UtaPdkwqfcsCBkgZ0cCraqwHJzjljgTBL1IN4fACbY1oPtPf0ULAhHr2JSBRzdNvDEV46i18VMCR3ggdeESr30RqwC48O%2BLgve%2FfCnXIq8M%2B28PU1FtKeZrbhns92dUPZoDLhguwZXbWQ4f8fnr%2FnhYQcle26tOqEu7NL3DT2XGGgtFFPX3ShYMQB4VpUXlrOih%2FlURMQNJx9%2FudtC%2FHTFXdKzu2i7W4IhmjsIyqHJVe6XmGmojd9aH3ngfh5Ki9EXACDVsFaEiypTeYv%2FQ8V2lLWUC2WUsKGTSHcXMXfeIZHY3ZjpVIpQjsTxqX%2BzOG%2BxvXgWC8vYsq5AMI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw5MzU1NjcyNzc5ODUiDF2xB8XY9EYBzEmgICq4Ax4OmweHKzcuiJuBJkXD%2BE866DzWPoXc0iOwhfiFFBQmCgNVjz2wpKw56KuaIitfwosQwFYvOeH%2FnO7IMTQEakFXGZLP4AD7W6CNu8IQYkGbOvndyGg94ubKdcn8yMQbMB5KwR7I5Q3foYSqzizIZQuFxe9PWo3nYFdXHNOUwOf690IT8UXU8JmoNndOkuQb8QQu4wJY9DJBnU6CpUiLEQFYxOifvuEluBJo9kKiQRMeuO03Gdnzv%2BxqrZ5GgS8qSorq%2BiebuEVxo0t1bOVLIroAv2jOFSTeEyiZvQb%2Flp2qOt91kqnwFpFzMKuBUjudjtfXiyjoWgqzOlhRdV4faGsCb24BCW7%2FM73RMyZnPt6MY%2B3qOQvCa0hrlUAbdyhvTsSEFx%2BF%2BfDeOGUOD4DcFH8fcE2qe%2BIemvfOtgZqTFzyU%2FAzijCUd0RL06bIkg4W9pbCHnuM6lmfjRBl5u6tF7e4mwUtY1xHSmE8OO9TTu6uGbvXegUPwvzVaFufhM76ZGa3IwmGfuxJMKrbB9p36lvcK%2BkY8Vt6E%2BkgfjAn7WknBEa8lkyZr6hMhqri%2FrbJ9iQqqfhLnQOoMKq7vdoF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180718T163531Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA5TVBHX6QTDEAL3X7%2F20180718%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a58b72eed2a14d8472b989ab4dcd50bba4cc9e2fedfd709e254d4d3378f6ff7e',
          description: 'Lots of open space'
        }
      ]);
    });
};
