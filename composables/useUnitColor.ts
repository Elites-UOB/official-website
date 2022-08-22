export default () => {
    const colors = [
        {name: 'Alkhwarizmi Unit', color: '#eec210'},
        {name: 'Pythagoras Unit', color: '#2ea863'},
        {name: 'Tesla Unit', color: '#df4444'},
        {name: 'DaVinci Unit', color: '#7b92c5'},
    ];

    const getUnitColor = (name: String) => {
        return colors.find(color => color.name == name)?.color
    }

    return { getUnitColor }
}