export default () => {
    const colors = [
        {name: 'Alkhwarizmi Unit', color: 'bg-[#eec210]'},
        {name: 'Pythagoras Unit', color: 'bg-[#2ea863]'},
        {name: 'Tesla Unit', color: 'bg-[#df4444]'},
        {name: 'DaVinci Unit', color: 'bg-[#7b92c5]'},
    ];

    const getUnitColor = (name: String) => {
        return colors.find(color => color.name == name)?.color
    }

    return { getUnitColor }
}