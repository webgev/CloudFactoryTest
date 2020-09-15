/**
 * Экран Котировки
 */

import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {COLORS} from 'styles/Colors';
import {STYLES} from 'styles/Theme';
import {Api} from 'utils';
import {ITickerData} from 'utils/Interfaces';
import {TextAnimated} from 'components';
interface Props {
  navigation: any;
}

export const TickerScreen = (props: Props) => {
  const [data, setData] = React.useState<ITickerData>({});
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const timer = React.useRef<NodeJS.Timeout>();

  //основная функция загрузки данных
  const load = async () => {
    try {
      const res = await Api.getTicker();
      setData(res);
      setError(false);
    } catch (er) {
      setError(true);
      if (__DEV__) {
        console.warn(er);
      }
    }
    setLoading(false);
  };

  React.useEffect(() => {
    load();
    // подкисываемся на событие фокуса текущей страницы
    const focus = props.navigation.addListener('focus', () => {
      // каждый 5 секунд обновляем данные
      timer.current = setInterval(load, 5000);
    });
    // подкисываемся на событие когда страница не активна
    const blur = props.navigation.addListener('blur', () => {
      // останавливаем таймер
      if (timer.current) {
        clearInterval(timer.current);
      }
    });
    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
      blur();
      focus();
    };
  }, [props.navigation]);

  const renderItem = ({item}: {item: string}) => {
    return (
      <View style={[STYLES.flexRow, STYLES.wrapper, styles.row]}>
        <Text style={styles.name}>{item}</Text>
        <View style={styles.values}>
          <TextAnimated style={styles.last}>{data[item].last}</TextAnimated>
          <TextAnimated style={styles.highestBid}>
            {data[item].highestBid}
          </TextAnimated>
          <TextAnimated style={styles.percentChange}>
            {data[item].percentChange}
          </TextAnimated>
        </View>
      </View>
    );
  };
  return (
    <View style={STYLES.container}>
      {loading ? (
        <ActivityIndicator style={styles.loading} size="large" />
      ) : (
        <FlatList
          data={Object.keys(data)}
          keyExtractor={(item) => item}
          renderItem={renderItem}
          initialNumToRender={Object.keys(data).length}
          ListHeaderComponent={
            error ? (
              <View style={styles.error}>
                <Text style={styles.errorText}>Ошибка</Text>
              </View>
            ) : null
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  row: {
    justifyContent: 'space-between',
    borderWidth: 1,
    paddingVertical: 8,
  },
  values: {
    alignItems: 'flex-end',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    alignSelf: 'center',
  },
  last: {
    color: COLORS.orange,
  },
  highestBid: {
    color: COLORS.blue,
  },
  percentChange: {
    color: COLORS.red,
  },
  error: {
    backgroundColor: COLORS.red,
    paddingVertical: 10,
  },
  errorText: {
    color: COLORS.white,
    textAlign: 'center',
  },
});
