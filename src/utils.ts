const bigTask = (int: number) => {
    const sum = new Array(int)
        .fill(0)
        .map((el, idx) => el + idx)
        .reduce((sum, el) => sum + el, 0)
    return sum
}

const runTask = (int: number) => {
    console.log("Started")
    bigTask(int)
    return '🎉 Done'
}

const runTaskAsync = async (int: number) => {

    return new Promise((resolve, reject) => {
        try{
            bigTask(int)
            resolve('🎉 Done')
        } catch (e) {

        }
    })
}

export {bigTask,runTask, runTaskAsync}
