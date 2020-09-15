/**
 * Глобальные стили
 */

import {StyleSheet} from 'react-native';
import {COLORS} from './Colors';

export const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },
  flexRow: {
    flexDirection: 'row',
  },
  wrapper: {
    paddingHorizontal: 20,
  },
});
