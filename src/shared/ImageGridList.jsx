import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';



import { fetchProducts } from '../utils/fetchData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 950,
    height: 650,
  },
  item: {
    margin: 1
  }
}));

export default function ImageGridList({count,setCount}) {

  const [data, getData] = useState({});

  useEffect( () => {
        const res = async() => {
            let x = await fetchProducts();
            getData(x);

        }
        res();
    }, []);

  const handleClick = (e) => {
    let elem = e.target.parentNode.parentNode.parentNode.parentNode;
    console.log(elem)
    setCount(count + 1)
    elem.style.display = 'none';
  }

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList cellHeight={60} className={classes.gridList} cols={20} >
        {data.data?data.data.products.map((tile) => (
          <GridListTile className={classes.item} onClick={handleClick} key={tile.IMAGE} cols={6}>
            <img src={tile.IMAGE} alt={tile.NAME} width="300"/>
            <GridListTileBar
              title={tile.NAME}
              subtitle={<span>$ {tile.PRICE}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.NAME}`} className={classes.icon}>
                  <AddIcon />
                </IconButton>
              }
            />
            <p>
          Hola</p>
          </GridListTile>
        )):null}
      </GridList>
    </div>
  );
}
