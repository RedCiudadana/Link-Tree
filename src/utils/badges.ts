export const getBadgeVariant = (badge: string): 'new' | 'updated' | 'recommended' => {
  if (badge === 'Nuevo') return 'new';
  if (badge === 'Actualizado') return 'updated';
  return 'recommended';
};
