exports.recipessidebar = class recipessidebar {
    constructor(page){
    this.page = page
    this.recipesDown = page.getByRole('link',{name:'Recipes'})
}
async RecipesNavDown(){
    await this.recipesDown.click()
}
}