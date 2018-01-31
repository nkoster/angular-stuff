import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) return null;
    let words = value.split(' ');
    for (var i = 0; i < words.length; i++) {
      let word = words[i];
      if (i > 0 && this.ifPreposition(word))
        word = word.toLowerCase()
      else
        word = this.toTitleCase(word);
      words[i] = word
    }
    return words.join(' ');
  }

  private toTitleCase(word: string): string {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase()
  }

  private ifPreposition(word: string): boolean {
    let prepositions = [
      'of',
      'the'
    ]
    return prepositions.includes(word.toLowerCase())
  }
}
