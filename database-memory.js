import { randomUUID } from "crypto"

export class DatabaseMemory {

    #user = new Map()

    list(){
        return Array.from(this.#user.entries()).map((userarray) => {
            const id = userarray[0]
            const data = userarray[1]

            return{
                id,
                ...data,
            }
        })
    }
    
    create(user) {
        const userId = randomUUID();

        this.#user.set(userId, user)
    }

    update(id, user) {
        this.#user.set(id, user)
    }

    delete(id, user) {
        this.#user.delete(id)
    }
}